import {Route} from "./route";

export interface Booking {
  id: number;
  end: string;
  passengers: number;
  start: string;
  route: Route;
};
