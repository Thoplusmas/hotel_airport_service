import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Airport} from "../airport";
import {Route} from "../route";


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  getUrl : string = "http://localhost:8080/api/airport/"
  getAvailableRoutesUrl : string = "http://localhost:8080/api/route?available=true"
  postUrl : string = "http://localhost:8080/api/airport/"


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

}
