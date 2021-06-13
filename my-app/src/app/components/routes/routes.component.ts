import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Routes} from "@angular/router";
import {RestService} from "../../services/restservice";
import {Route} from "../../models/route";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  routes: Route[] | undefined;
  route: Route | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getRoutes().subscribe((routes) => {this.routes = routes});
  }

  onButtonClick() {
    this.rs.postRoute(this.route);
  }
}
