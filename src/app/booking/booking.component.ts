import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from './booking-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AfterBuyComponent } from '../after-buy/after-buy.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  seatsBoolean: boolean = false;
  personalBoolean: boolean = false;

  constructor(private bookingService: BookingServiceService, private dialog: MatDialog) { }

  ngOnInit(): void { }

  onBuy() {
    this.bookingService.buyTickets();
    this.dialog.open(AfterBuyComponent, {
      panelClass: 'custom-dialogbox'
    });
  }

  onNext() {
    this.bookingService.sendBookingData();
  }

  //Disable and Enable Button/Stepper Seat
  setSeatsBoolean(completed: boolean) {
    this.seatsBoolean = completed;
  }

  //Disable and Enable Stepper Personal
  setPersonalBoolean(completed: boolean) {
    this.personalBoolean = completed;
  }
}
