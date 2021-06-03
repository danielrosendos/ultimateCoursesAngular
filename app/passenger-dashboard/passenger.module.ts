import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

import { PassengerService } from "./passenger.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    HttpModule,
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerService
  ]
})
export class PassengerDashboardModule {}
