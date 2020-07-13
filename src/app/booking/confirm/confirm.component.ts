import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { PersonalData } from 'src/app/shared/all.interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public bookingData;
  public personalData: PersonalData;
  constructor(private bookingService: BookingServiceService) { }

  ngOnInit(): void {
    this.bookingService.bookingSubject.subscribe((data) => {
      this.bookingData = data;
    })

    this.bookingService.personalDataSubject.subscribe((data) => {
      this.personalData = data;
    })
  }
}
