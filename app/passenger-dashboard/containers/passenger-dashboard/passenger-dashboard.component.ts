import {Component, OnInit} from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import {PassengerService} from "../../passenger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"
      >
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        (view)="handleView($event)"
      >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerService
  ) {}

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleEdit(editPassenger: Passenger) {
    this.passengerService
      .updatePassengers(editPassenger)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === editPassenger.id) {
            passenger = Object.assign({}, passenger, editPassenger);
          }
          return passenger;
        });
      });
  }

  handleRemove(removePassenger: Passenger) {
    this.passengerService
      .removePassengers(removePassenger)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== removePassenger.id;
        });
      })
  }

  handleView(passenger: Passenger) {
    this.router.navigate(['/passengers', passenger.id]);
  }
}
