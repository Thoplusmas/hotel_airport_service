import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {RestService} from "../../services/restservice";
import {Route} from "../../models/route";
import {Booking} from "../../models/booking";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] | undefined;

  constructor(private rs : RestService){}

  ngOnInit(): void{
    this.rs.getBookings().subscribe((bookings) => {this.bookings = bookings});
  }
}
