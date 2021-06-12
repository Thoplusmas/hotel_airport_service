import {Airport} from "./airport";
import {Vehicle} from "./vehicle";
import {Hotel} from "./hotels";

export interface Route {
  id: number;
  route_duration: string;
  price: string;
  airport: Airport;
  hotel: Hotel;
  vehicle: Vehicle;
};
