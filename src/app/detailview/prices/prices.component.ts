import { Component, OnInit } from '@angular/core';
import { CinemaPricesInterface } from 'src/app/shared/all.interfaces';

const CINEMA_PRICES: CinemaPricesInterface[] = [
  { product: 'Tickets', price: 12.00 },
  { product: 'Popcorn - small', price: 4.00 },
  { product: 'Popcorn - medium', price: 6.00 },
  { product: 'Popcorn - large', price: 8.00 },
  { product: 'Nachos', price: 5.00 },
  { product: 'Beverages', price: 3.00 }
]

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  displayedColumns: string[] = ['product', 'price'];
  dataSource = CINEMA_PRICES;
  constructor() { }

  ngOnInit(): void {
  }

}
