import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {

  constructor(private http: HttpClient) { }

  //Seat Booking
  newBooking(booking) {
    this.http.put('https://cinemoon-dc867.firebaseio.com/movie-booking.json/', booking).subscribe();
  }

  //Reset all Bookings
  setBookingInfo() {
    this.http.put('https://cinemoon-dc867.firebaseio.com/movie-booking.json/', this.movieInfo2).subscribe((d) => { console.log(d) });
  }

  //Get Booking Data
  fetchBookingInfo() {
    return this.http.get('https://cinemoon-dc867.firebaseio.com/movie-booking.json');
  }

  //Original Data 
  movieInfo2 = {
    movieId: {
      "550": {
        "title": "Fight Club",
        "dates":
          [
            {
              "day": "18.12.2020",
              "times":
                [
                  {
                    "time": "18:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  },
                  {
                    "time": "22:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  }
                ]
            },
            {
              day: '19.12.2020',
              "times":
                [
                  {
                    "time": "18:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  },
                  {
                    "time": "22:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  }
                ]
            },
          ]
      },
      "299534": {
        "title": "Avengers: Endgame",
        "dates":
          [
            {
              "day": "20.12.2020",
              "times":
                [
                  {
                    "time": "16:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  },
                  {
                    "time": "20:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  }
                ]
            },
            {
              day: '24.12.2020',
              "times":
                [
                  {
                    "time": "11:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  },
                  {
                    "time": "15:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  }
                ]
            },
          ]
      },
      "209112": {
        "title": "Batman v Superman: Dawn of Justice",
        "dates":
          [
            {
              "day": "26.12.2020",
              "times":
                [
                  {
                    "time": "12:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  },
                  {
                    "time": "18:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  }
                ]
            },
            {
              day: '27.12.2020',
              "times":
                [
                  {
                    "time": "14:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  },
                  {
                    "time": "20:00",
                    "seats": [
                      {
                        id: '1-1',
                        occupied: false,
                      },
                      {
                        id: '1-2',
                        occupied: false,
                      },
                      {
                        id: '1-3',
                        occupied: false,
                      },
                      {
                        id: '1-4',
                        occupied: false,
                      },
                      {
                        id: '1-5',
                        occupied: false,
                      },
                      {
                        id: '1-6',
                        occupied: false,
                      },
                      {
                        id: '1-7',
                        occupied: false,
                      },
                      {
                        id: '1-8',
                        occupied: false,
                      },
                      {
                        id: '2-1',
                        occupied: false,
                      },
                      {
                        id: '2-2',
                        occupied: false,
                      },
                      {
                        id: '2-3',
                        occupied: false,
                      },
                      {
                        id: '2-4',
                        occupied: false,
                      },
                      {
                        id: '2-5',
                        occupied: false,
                      },
                      {
                        id: '2-6',
                        occupied: false,
                      },
                      {
                        id: '2-7',
                        occupied: false,
                      },
                      {
                        id: '2-8',
                        occupied: false,
                      },
                      {
                        id: '3-1',
                        occupied: false,
                      },
                      {
                        id: '3-2',
                        occupied: false,
                      },
                      {
                        id: '3-3',
                        occupied: false,
                      },
                      {
                        id: '3-4',
                        occupied: false,
                      },
                      {
                        id: '3-5',
                        occupied: false,
                      },
                      {
                        id: '3-6',
                        occupied: false,
                      },
                      {
                        id: '3-7',
                        occupied: false,
                      },
                      {
                        id: '3-8',
                        occupied: false,
                      },
                      {
                        id: '4-1',
                        occupied: false,
                      },
                      {
                        id: '4-2',
                        occupied: false,
                      },
                      {
                        id: '4-3',
                        occupied: false,
                      },
                      {
                        id: '4-4',
                        occupied: false,
                      },
                      {
                        id: '4-5',
                        occupied: false,
                      },
                      {
                        id: '4-6',
                        occupied: false,
                      },
                      {
                        id: '4-7',
                        occupied: false,
                      },
                      {
                        id: '4-8',
                        occupied: false,
                      },
                    ]
                  }
                ]
            },
          ]
      }
    }
  }
}