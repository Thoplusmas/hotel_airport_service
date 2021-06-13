import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {RestService} from "../../services/restservice";
import {Route} from "../../models/route";
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getVehicles().subscribe((vehicles) => {this.vehicles = vehicles});
  }
}
