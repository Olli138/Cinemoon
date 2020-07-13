import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/movie-data.service';
import { Router } from '@angular/router';
import { MovieProviderService } from 'src/app/movie-provider.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {
  moviesNowContainer;
  public movieId: number;
  constructor(private movieProviderService: MovieProviderService) { }

  ngOnInit(): void {
    this.movieProviderService.nowSubject.subscribe(
      (movies) => {
        this.moviesNowContainer = movies;
      })

    if (!this.moviesNowContainer) {
      this.movieProviderService.nextNowShowing();
    }
  }
}
