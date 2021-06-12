import { Component } from '@angular/core';
import { RestService } from './services/restservice';
import { OnInit } from '@angular/core';
import {Airport} from "./airport";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  airports: Airport[] | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getAirports().subscribe((airports) => {this.airports = airports});
  }
}
