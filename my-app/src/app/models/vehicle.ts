import {Airport} from "./airport";
import {Driver} from "./driver";

export interface Vehicle {
  no: number;
  isAvailable: boolean;
  noOfSeats: number;
  airport: Airport;
  driver: Driver;
};
