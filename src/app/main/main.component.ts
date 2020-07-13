import { Component, OnInit } from '@angular/core';
import { MovieProviderService } from '../movie-provider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public moviesNowContainer: any;
  public moviesSoonContainer: any;

  constructor(private movieProviderService: MovieProviderService) { }

  ngOnInit(): void {
    this.movieProviderService.nowSubject.subscribe((movies) => this.moviesNowContainer = movies)
    if (!this.moviesNowContainer) {
      this.movieProviderService.nextNowShowing();
    }

    this.movieProviderService.soonSubject.subscribe(
      (movies) => {
        this.moviesSoonContainer = movies;
      })
    if (!this.moviesSoonContainer) {
      this.movieProviderService.nextSoonShowing();
    }
  }
}
