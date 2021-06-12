import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Airport } from './airport';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:4200/api/airport/"


  getAirports()
  {
    var airports = this.http.get<any[]>(this.url);
    console.log(airports);
    return this.http.get<any[]>(this.url);
  }
}
