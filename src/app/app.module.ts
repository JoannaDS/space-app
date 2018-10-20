import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaunchesComponent } from './launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchesComponent,
    LaunchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
