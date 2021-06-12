import {Route} from "./route";

export interface Booking {
  id: number;
  end_of_tour: string;
  passengers: number;
  start_of_tour: string;
  route: Route;
};
