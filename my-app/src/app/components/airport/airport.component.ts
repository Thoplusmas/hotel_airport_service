import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/restservice';
import { ActivatedRoute, Router } from '@angular/router';
import {Airport} from "../../models/airport";

@Component({
  selector: 'airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {

  airports: Airport[] | undefined;
  airport: Airport | undefined;

  constructor(private rs: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.rs.getAirports().subscribe((airports) => {
      this.airports = airports
    });
    this.rs.postAirport(this.airport);
  }

  onButtonClick() {
    this.rs.postAirport(JSON.stringify(this.airport));
  }
}
