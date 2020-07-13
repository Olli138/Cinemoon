import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soon-small',
  templateUrl: './soon-small.component.html',
  styleUrls: ['./soon-small.component.scss']
})
export class SoonSmallComponent implements OnInit {
  @Input() soonShowingMovies: any;
  constructor() { }

  ngOnInit(): void { }

}
