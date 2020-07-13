import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './main/landing/landing.component';
import { NowSmallComponent } from './main/now-small/now-small.component';
import { SoonSmallComponent } from './main/soon-small/soon-small.component';
import { MainComponent } from './main/main.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { NowSoonComponent } from './detailview/now-soon/now-soon.component';
import { NowComponent } from './detailview/now-soon/now/now.component';
import { SoonComponent } from './detailview/now-soon/soon/soon.component';
import { MovieDetailComponent } from './detailview/movie-detail/movie-detail.component';
import { BookingComponent } from './booking/booking.component';
import { SeatsComponent } from './booking/seats/seats.component';
import { PersonalDataComponent } from './booking/personal-data/personal-data.component';
import { ConfirmComponent } from './booking/confirm/confirm.component';
import { PricesComponent } from './detailview/prices/prices.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { VideoComponent } from './detailview/movie-detail/video/video.component';
import { AfterBuyComponent } from './after-buy/after-buy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    NowSmallComponent,
    SoonSmallComponent,
    MainComponent,
    DetailviewComponent,
    NowSoonComponent,
    NowComponent,
    SoonComponent,
    MovieDetailComponent,
    BookingComponent,
    SeatsComponent,
    PersonalDataComponent,
    ConfirmComponent,
    PricesComponent,
    NotFoundComponent,
    VideoComponent,
    AfterBuyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
