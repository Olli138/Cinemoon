import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-now-small',
  templateUrl: './now-small.component.html',
  styleUrls: ['./now-small.component.scss']
})
export class NowSmallComponent implements OnInit {
  @Input() nowShowingMovies: any;
  constructor() { }

  ngOnInit(): void { }
}
