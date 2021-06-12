import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Airport } from '../airport';

@Injectable()
export class AirportSearchService {

  private inMemoryWebApiBaseUrl = 'api/airports/?name=' // TODO: put real base URL to web API here
  private paxlifeApiQueryGetUrl = 'https://sandbox.paxlife.aero/api/search/';
  private ApiBaseUrl = this.inMemoryWebApiBaseUrl;

	constructor(
		private http: Http
	) {}

	// Note the shape of the data that the server returns.
	// This particular in-memory web API example returns an object with a data property.
	// Your API might return something else. Adjust the code to match your web API.
	// search(term: string): Observable<Airport[]> {
	// 	console.log('Using In-memory Web API');
	// 	return this
	// 		.http.get(`${this.ApiBaseUrl}${term}`)
	// 		.map(response => response.json().data as Airport[])
	// 		.catch(this.handleError);
	// }

	searchAPI(term: string): Observable<Airport[]> {
		let reqUrl = `${this.paxlifeApiQueryGetUrl}${term}`;
		return this.http.get(reqUrl)
			.map(response => response.json() as Airport[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		// for demo purposes only, TODO: add proper error handling
		console.error('An error occurred: ', error);
		return Promise.reject(error.message || error);
	}
}
