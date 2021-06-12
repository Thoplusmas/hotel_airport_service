import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {RestService} from "../../services/restservice";
import {Route} from "../../route";
import {Driver} from "../../driver";

@Component({
  selector: 'app-bookings',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getDrivers().subscribe((drivers) => {this.drivers = drivers});
  }
}
