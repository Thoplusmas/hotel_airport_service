import {Airport} from "./airport";
import {Vehicle} from "./vehicle";
import {Hotel} from "./hotels";

export interface Route {
  id: number;
  duration: string;
  price: number;
  airport: Airport;
  hotel: Hotel;
  vehicle: Vehicle;
};
