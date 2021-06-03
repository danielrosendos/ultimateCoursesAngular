import {Component, OnInit} from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import {PassengerService} from "../../passenger.service";

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
      >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(
    private passengerService: PassengerService
  ) {}

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => this.passengers = data);
  }

  handleEdit(editPassenger: Passenger) {
    this.passengerService
      .updatePassengers(editPassenger)
      .then((data: Passenger) => {
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
      .then((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== removePassenger.id;
        });
      })
  }
}
