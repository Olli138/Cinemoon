import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieProviderService } from './movie-provider.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  moviesSoonIds: number[] = [122917, 131631, 497, 155, 299537, 301528, 384018]
  moviesNowIds: number[] = [299534, 550, 209112]
  moviesNowSubject = new Subject<any>();
  moviesSoonSubject = new Subject<any>();

  constructor(private http: HttpClient, private movieProviderService: MovieProviderService) { }

  //Get Now Showing Movies from Firebase
  public fetchNowShowing() {
    let dataContainerNow = [];
    for (let id of this.moviesNowIds) {
      dataContainerNow.push(this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=` + environment.movieDBkey + '&append_to_response=videos'));
    }
    const nowJoint = forkJoin(dataContainerNow)
    return nowJoint.pipe(
      tap(movies => {
        this.movieProviderService.setNowShowing(movies);
      })
    ).subscribe()
  }

  //Get Soon Showing Movies from Firebase
  public fetchSoonShowing() {
    let dataContainerSoon = [];
    for (let id of this.moviesSoonIds) {
      dataContainerSoon.push(this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=` + environment.movieDBkey + '&append_to_response=videos'));
    }
    const soonJoint = forkJoin(dataContainerSoon)
    return soonJoint.pipe(
      tap(movies => {
        this.movieProviderService.setSoonShowing(movies);
      })
    ).subscribe()
  }
}
