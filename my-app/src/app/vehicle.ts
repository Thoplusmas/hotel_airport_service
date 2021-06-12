import {Airport} from "./airport";
import {Driver} from "./driver";

export interface Vehicle {
  vehicle_no: number;
  is_available: boolean;
  no_of_seats: number;
  airport: Airport;
  driver: Driver;
};
