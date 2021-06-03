import {Component, OnInit} from "@angular/core";

import { PassengerService } from "../../passenger.service";

import { Passenger } from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";

import 'rxjs/add/operator/switchMap';

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
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerService
  ) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data:Passenger) => this.passenger = data)
  }
  onUpdatePasssenger(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      })
  }
}
