import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {RestService} from "../../services/restservice";
import {Route} from "../../models/route";
import {Hotel} from "../../models/hotels";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getHotels().subscribe((hotels) => {this.hotels = hotels});
  }
}
