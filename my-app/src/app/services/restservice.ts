import {Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Airport} from "../models/airport";
import {Route} from "../models/route";
import {Booking} from "../models/booking";
import {Hotel} from "../models/hotels";
import {Driver} from "../models/driver";
import {Vehicle} from "../models/vehicle";


@Injectable({
  providedIn: 'root'
})
export class RestService {
  @Input() airportModel: Airport | undefined;
  private airportInput: any;

  constructor(private http : HttpClient) { }

  getUrl : string = "http://localhost:8080/api/airport/"
  getAvailableRoutesUrl : string = "http://localhost:8080/api/route"
  postUrl : string = "http://localhost:8080/api/airport/"
  postRouteUrl : string = "http://localhost:8080/api/route/"
  getHotelsUrl : string = "http://localhost:8080/api/hotel/"
  getBookingsUrl : string = "http://localhost:8080/api/booking/"
  getDriversUrl : string = "http://localhost:8080/api/driver/"
  getVehiclesUrl : string = "http://localhost:8080/api/vehicle/"


  getAirports(): Observable<Airport[]>
  {
    var airports = this.http.get<Airport[]>(this.getUrl);
    console.log(airports);
    return airports;
  }

  postAirport(Airport: any): Airport
  {
    let airport = this.http.post<Airport>(this.postUrl, JSON.stringify(Airport)).toPromise();
    console.log(airport);
    return <Airport><unknown>airport;
  }

  getRoutes(): Observable<Route[]>
  {
    var routes = this.http.get<Route[]>(this.getAvailableRoutesUrl);
    return routes;
  }

  postRoute(Route: any): Airport
  {
    let route = this.http.post<Airport>(this.postRouteUrl, JSON.stringify(Route)).toPromise();
    console.log(route);
    return <Airport><unknown>route;
  }

  getBookings(): Observable<Booking[]>
  {
    var bookings = this.http.get<Booking[]>(this.getBookingsUrl);
    return bookings;
  }

  getHotels(): Observable<Hotel[]>
  {
    var hotels = this.http.get<Hotel[]>(this.getHotelsUrl);
    return hotels;
  }

  getDrivers(): Observable<Driver[]>
  {
    var drivers = this.http.get<Driver[]>(this.getDriversUrl);
    return drivers;
  }

  getVehicles(): Observable<Vehicle[]>
  {
    var vehicles = this.http.get<Vehicle[]>(this.getVehiclesUrl);
    return vehicles;
  }

}
