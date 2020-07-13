import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-soon',
  templateUrl: './now-soon.component.html',
  styleUrls: ['./now-soon.component.scss']
})
export class NowSoonComponent implements OnInit {

  navLinks = [
    { path: 'now', label: 'Now' },
    { path: 'soon', label: 'Soon' }
  ]

  constructor() { }

  ngOnInit(): void { }
}
