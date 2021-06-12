import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AirportsComponent } from './components/airports/airports.component';

const routes: Routes = [
  //{ path: 'airports', component: AirportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
