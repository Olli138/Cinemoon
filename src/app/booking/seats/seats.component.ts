import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { BookingDataService } from 'src/app/shared/booking-data.service';
import { ActivatedRoute } from '@angular/router';
import { Seats } from 'src/app/shared/all.interfaces';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  public seats: Seats;
  public seatStepper: boolean = false;
  public seatCount = 0;
  public movieId: string;
  public dayId: string;
  public timeId: string;
  public day: string;
  public time: string;
  public movieTitle: string;

  @Output() stepCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, private bookingDataService: BookingDataService, private bookingService: BookingServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.firstChild.params['movieId'];
    this.dayId = this.route.snapshot.firstChild.params['dayId'];
    this.timeId = this.route.snapshot.firstChild.params['timeId'];

    //Fetching Booking Information
    this.bookingDataService.fetchBookingInfo().subscribe((data: any) => {
      this.bookingService.setDataCopy(data, this.movieId, this.dayId, this.timeId);
      this.movieTitle = data.movieId[this.movieId].title;
      this.seats = data.movieId[this.movieId].dates[this.dayId].times[this.timeId].seats;
      this.day = data.movieId[this.movieId].dates[this.dayId].day;
      this.time = data.movieId[this.movieId].dates[this.dayId].times[this.timeId].time;
    });
  }

  //Reset the database
  onNewMovie() {
    this.bookingDataService.setBookingInfo();
  }

  toggleClass(event: any, selectClass: string, seat: string) {
    const hasClass = event.target.classList.contains(selectClass);
    const hasOccupiedClass = event.target.classList.contains('occupied')
    if (!hasOccupiedClass) {
      if (hasClass) {
        this.renderer.removeClass(event.target, selectClass);
        this.bookingService.removeSeat(seat);
        if (this.seatCount > 0) {
          this.seatCount--;
        }
        this.bookingService.sendBookingData();
        this.emitStepCompleted();
      } else {
        this.renderer.addClass(event.target, selectClass);
        this.bookingService.addSeat(seat, this.seatCount)
        this.seatCount++;
        this.bookingService.sendBookingData();
        this.emitStepCompleted();
      }
    }
  }

  //Check and send step completed
  emitStepCompleted() {
    if (!this.seatCount) {
      this.seatStepper = false;
    } else {
      this.seatStepper = true;
    }
    this.stepCompleted.emit(this.seatStepper);
  }
}

