import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger.module";

import { HomeComponent } from "./home.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
