import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
