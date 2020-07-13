import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/movie-data.service';
import { MovieProviderService } from 'src/app/movie-provider.service';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.scss']
})
export class SoonComponent implements OnInit {
  public moviesSoonContainer: any;

  constructor(private movieProviderService: MovieProviderService) { }

  ngOnInit(): void {
    this.movieProviderService.soonSubject.subscribe(
      (movies) => {
        this.moviesSoonContainer = movies;
      })

    if (!this.moviesSoonContainer) {
      this.movieProviderService.nextSoonShowing();
    }
  }
}
