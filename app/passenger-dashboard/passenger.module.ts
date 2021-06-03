import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

import { PassengerService } from "./passenger.service";

import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    HttpModule,
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerService
  ]
})
export class PassengerDashboardModule {}
