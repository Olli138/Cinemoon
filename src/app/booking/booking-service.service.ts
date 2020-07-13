import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookingDataService } from '../shared/booking-data.service';
import { PersonalData } from '../shared/all.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  public selectedSeats: string[] = [];
  public bookingData: any;
  public bookingDataUpdate: any;
  public movieId: string;
  public dayId: string;
  public timeId: string;

  public personalData: PersonalData;

  public bookingSubject = new Subject<any>();
  public personalDataSubject = new Subject<any>();

  constructor(private bookingDataService: BookingDataService) { }

  removeSeat(seatId: string) {
    const index = this.selectedSeats.indexOf(seatId);
    if (index > -1) {
      this.selectedSeats.splice(index, 1)
    }
  }

  addSeat(seatId: string, seatCount: number) {
    (seatCount < this.selectedSeats.length) ? this.selectedSeats = [] : this.selectedSeats;
    this.selectedSeats.push(seatId);
  }

  setDataCopy(data: any, movieid: string, dayid: string, timeid: string) {
    this.movieId = movieid;
    this.dayId = dayid;
    this.timeId = timeid;
    this.bookingData = data;
  }

  buyTickets() {
    this.bookingDataUpdate = this.bookingData;

    for (let selectedSeat of this.selectedSeats) {
      for (let seat of this.bookingDataUpdate.movieId[this.movieId].dates[this.dayId].times[this.timeId].seats) {
        if (seat.id === selectedSeat) {
          seat.occupied = true;
        }
      }
    }
    this.bookingDataService.newBooking(this.bookingDataUpdate);
  }

  //Send Booking Data
  sendBookingData() {
    const Obj = {
      'title': this.bookingData.movieId[this.movieId].title,
      'date': this.bookingData.movieId[this.movieId].dates[this.dayId].day,
      'time': this.bookingData.movieId[this.movieId].dates[this.dayId].times[this.timeId].time,
      'seats': this.selectedSeats,
      'total': this.selectedSeats.length * 12
    }
    this.bookingSubject.next(Obj);
  }

  //Send Personal Data
  sendPersonalData() {
    this.personalDataSubject.next(this.personalData);
  }

  //Set Personal Data
  setPersonalData(data: PersonalData) {
    this.personalData = data;
    this.sendPersonalData();
  }
}
