import {Component, OnInit} from "@angular/core";

import { PassengerService } from "../../passenger.service";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePasssenger($event)"
      ></passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit{
  passenger: Passenger;
  constructor(
    private passengerService: PassengerService
  ) {
  }

  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data:Passenger) => this.passenger = data);
  }
  onUpdatePasssenger(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      })
  }
}
