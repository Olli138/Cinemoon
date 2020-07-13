import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cinemoon';

  movieDataLoaded: boolean = false;

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
    if (!this.movieDataLoaded) {
      this.movieDataService.fetchNowShowing();
      this.movieDataService.fetchSoonShowing();
      this.movieDataLoaded = true;
    }
  }
}
