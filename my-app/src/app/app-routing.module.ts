import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesComponent} from "./components/routes/routes.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MenubarModule} from "primeng/menubar";
import {BookingsComponent} from "./components/bookings/bookings.component";
import {HotelsComponent} from "./components/hotels/hotels.component";
import {DriversComponent} from "./components/drivers/drivers.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {AirportComponent} from "./components/airport/airport.component";

const routes: Routes = [
  { path: 'airport', component: AirportComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'vehicles', component: VehiclesComponent }
  //TODO add paths!
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MenubarModule],
  declarations: [
    NavbarComponent
  ],
  exports: [RouterModule, NavbarComponent]
})
export class AppRoutingModule { }
export const routingComponents = [AirportComponent, RoutesComponent, BookingsComponent, HotelsComponent, DriversComponent, VehiclesComponent]
