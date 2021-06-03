import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';

import { Passenger } from "./models/passenger.interface";

const PASSENGER_API: string = '/api/passengers/';

@Injectable()
export class PassengerService {
  constructor(
    private http: Http
  ) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }
}
