import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Airport} from "../airport";


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:8989/api/airport/"


  getAirports(): Observable<Airport[]>
  {
    var airports = this.http.get<Airport[]>(this.url);
    console.log(airports);
    return airports;
  }
}
