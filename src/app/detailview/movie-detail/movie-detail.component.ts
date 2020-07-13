import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieProviderService } from 'src/app/movie-provider.service';
import { BookingDataService } from 'src/app/shared/booking-data.service';
import { MatDialog } from '@angular/material/dialog';
import { VideoComponent } from './video/video.component';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public dates: any;
  public timeData: any;
  public movieId: number;
  public timeId: string;
  public dayId: number;
  public moviesNowContainer: Object;
  public selectedMovie: any;
  public moviesNowIds = [299534, 550, 209112];
  public modeNow: boolean;

  constructor(private route: ActivatedRoute, private movieProviderService: MovieProviderService, private bookingDataService: BookingDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.params['id'];

    //Checks if Movie belongs to Now or Soon
    const index = this.moviesNowIds.indexOf(this.movieId)
    if (index > -1) {
      this.modeNow = true;
    } else {
      this.modeNow = false;
    }


    if (this.modeNow) {
      //Fetching Booking Information
      this.bookingDataService.fetchBookingInfo().subscribe((data: any) => {
        this.timeData = data.movieId[this.movieId].dates;
        this.dates =
        {
          'days': [
            { value: this.timeData[0].day, id: '0' },
            { value: this.timeData[1].day, id: '1' }
          ],
        };
      })


      //Fetching Movie Information
      this.movieProviderService.nowSubject.subscribe(
        (movies) => {
          movies.forEach((movie: any) => {
            if (+movie.id === this.movieId) {
              this.selectedMovie = movie;
            }
          })
        })
      if (!this.selectedMovie) {
        this.movieProviderService.nextNowShowing();
      }
    }

    if (!this.modeNow) {
      //Fetching Movie Information
      this.movieProviderService.soonSubject.subscribe(
        (movies) => {
          movies.forEach((movie: any) => {
            if (+movie.id === this.movieId) {
              this.selectedMovie = movie;
            }
          })
        })
      if (!this.selectedMovie) {
        this.movieProviderService.nextSoonShowing();
      }
    }
  }

  //MatDialog for Trailer
  openDialog() {
    this.dialog.open(VideoComponent, {
      panelClass: 'video-class',
      data: {
        key: this.selectedMovie.videos.results[0].key
      }
    });
  }
}
