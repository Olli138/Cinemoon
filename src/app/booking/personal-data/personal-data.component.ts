import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingServiceService } from '../booking-service.service';
import { PersonalData } from 'src/app/shared/all.interfaces';


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit, AfterContentChecked {
  public personalStepper: boolean = false;
  public guestForm: FormGroup;

  @Output() personalStepCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private bookingService: BookingServiceService, private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.guestForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'payment': new FormControl(),
      'creditcard': new FormControl(null, [Validators.minLength(16), Validators.maxLength(16)]),
    })
  }

  ngAfterContentChecked() {
    //If Payment changed from creditcard to on site set required to false
    if (this.guestForm.get('payment').value === 'On site') {
      this.guestForm.get('creditcard').setErrors(null);
      this.guestForm.updateValueAndValidity();
    }
    this.cdref.detectChanges();
  }

  //Check if Form is valid
  guestFormValid() {
    if (this.guestForm.valid) {
      this.personalStepper = true;
      this.personalStepCompleted.emit(this.personalStepper);
    }
  }

  //Send Personal Data on Click
  onSubmit() {
    const personalData: PersonalData = {
      'firstname': this.guestForm.get('firstname').value,
      'lastname': this.guestForm.get('lastname').value,
      'email': this.guestForm.get('email').value,
      'payment': this.guestForm.get('payment').value,
      'creditcard': this.guestForm.get('creditcard').value,
    }
    this.bookingService.setPersonalData(personalData);
  }
}


