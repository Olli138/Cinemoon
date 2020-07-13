import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MovieProviderService {
    soonSubject = new Subject<Object[]>();
    nowSubject = new Subject<Object[]>();
    public nowShowingMovies: Object[] = [];
    public soonShowingMovies: Object[] = [];

    //Set Now Showing in this Service
    setNowShowing(movieData: any) {
        this.nowShowingMovies = movieData;
        this.nowSubject.next(movieData);

    }

    //Send Now Showing 
    nextNowShowing() {
        this.nowSubject.next(this.nowShowingMovies);
    }

    //Set Soon Showing in this Service
    setSoonShowing(movieData: any) {
        this.soonShowingMovies = movieData;
        this.soonSubject.next(movieData);
    }

    //Send Soon Showing 
    nextSoonShowing() {
        this.soonSubject.next(this.soonShowingMovies);
    }
}