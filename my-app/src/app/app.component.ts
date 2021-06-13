import { Component } from '@angular/core';
import { RestService } from './services/restservice';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import {Airport} from "./models/airport";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  airports: Airport[] | undefined;
  airport: Airport | undefined;

  constructor(private rs : RestService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.rs.getAirports().subscribe((airports) => {this.airports = airports});
    this.rs.postAirport(this.airport);
  }

  onButtonClick() {
    this.router.navigate([`./my-app/app-routes`], { relativeTo: this.route });
  }
}
