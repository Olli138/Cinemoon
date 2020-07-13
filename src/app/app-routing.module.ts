import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { NowSoonComponent } from './detailview/now-soon/now-soon.component';
import { NowComponent } from './detailview/now-soon/now/now.component';
import { SoonComponent } from './detailview/now-soon/soon/soon.component';
import { MovieDetailComponent } from './detailview/movie-detail/movie-detail.component';
import { BookingComponent } from './booking/booking.component';
import { SeatsComponent } from './booking/seats/seats.component';
import { PricesComponent } from './detailview/prices/prices.component';
import { NotFoundComponent } from './error/not-found/not-found.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'detailview', component: DetailviewComponent, children: [
      {
        path: 'now-soon', component: NowSoonComponent, children: [
          { path: 'now', component: NowComponent },
          { path: 'soon', component: SoonComponent }
        ]
      },
      { path: 'movie-detail/:id', component: MovieDetailComponent },
      { path: 'prices', component: PricesComponent }
    ]
  },
  {
    path: 'booking', component: BookingComponent, children: [
      {
        path: 'seats/:movieId/:dayId/:timeId', component: SeatsComponent
      }
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
