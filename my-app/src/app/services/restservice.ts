import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Airport} from "../airport";
import {Route} from "../route";
import {Hotel} from "../hotels";
import {Driver} from "../driver";
import {Vehicle} from "../vehicle";


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  getUrl : string = "http://localhost:8080/api/airport/"
  getAvailableRoutesUrl : string = "http://localhost:8080/api/route?airport=1&available=true&hotel=1&passengers=1&time=1"
  postUrl : string = "http://localhost:8080/api/airport/"
  getHotelsUrl : string = "http://localhost:8080/api/hotel/"
  getDriversUrl : string = "http://localhost:8080/api/driver/"
  getVehiclesUrl : string = "http://localhost:8080/api/vehicle/"


  getAirports(): Observable<Airport[]>
  {
    var airports = this.http.get<Airport[]>(this.getUrl);
    console.log(airports);
    return airports;
  }

  postAirport(airport: Airport | undefined): Airport
  {
    let Airport = this.http.post<Airport>(this.postUrl, airport);
    console.log(airport);
    return <Airport>airport;
  }

  getRoutes(): Observable<Route[]>
  {
    var routes = this.http.get<Route[]>(this.getAvailableRoutesUrl);
    return routes;
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
