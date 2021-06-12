import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {RestService} from "../../services/restservice";
import {Route} from "../../route";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  routes: Route[] | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getRoutes().subscribe((routes) => {this.routes = routes});
  }
}
