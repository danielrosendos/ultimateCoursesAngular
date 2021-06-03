import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

import { PassengerService } from "./passenger.service";

import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

const routes: Routes = [
  {
    path: 'passengers',
    component: PassengerDashboardComponent
  }
]

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PassengerService
  ]
})
export class PassengerDashboardModule {}
