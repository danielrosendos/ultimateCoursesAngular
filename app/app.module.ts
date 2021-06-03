import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger.module";

import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: '', redirectTo: 'passengers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
