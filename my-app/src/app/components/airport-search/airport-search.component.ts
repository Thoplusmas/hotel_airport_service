import { Component, Input, OnInit } from '@angular/core';
import { Http, RequestOptions } 		from '@angular/http';
import { MAX_CHARS, MIN_SEARCH_LENGTH, PAUSE, TEXT_SEARCHING, TEXT_NORESULTS } from "../../globals";

import { Observable } 			 from 'rxjs/Observable';
import { Subject }    			 from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AirportSearchService } from './airport-search.service';
// import { AirportDetailMapComponent } from '../airport-detail-map/airport-detail-map.component';
import { Airport } from '../airport';

const noop = () => { };

@Component({
	selector: 'airport-search',
	templateUrl: './airport-search.component.html',
	styleUrls: ['./airport-search.component.scss'],
	providers: [ AirportSearchService ]
})
export class AirportSearchComponent implements OnInit {

	@Input() public textSearching = TEXT_SEARCHING;
	@Input() public textNoResults = TEXT_NORESULTS;

	public searchStr = '';
	public showSuggestions: boolean;
	private displaySearching = true;
  private _onTouchedCallback: () => void = noop;
	private _onChangeCallback: (_: any) => void = noop;

	airports: Observable<Airport[]>;
	selectedAirport: Airport;

	private searchTerms = new Subject<string>();

	constructor(
		private airportSearchService: AirportSearchService,
	) {}

	// Push a search term into the observable stream
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.showSuggestions = false;
		this.airports = this.searchTerms
			.debounceTime(300)		// wait 300ms after each keystroke before considering the term
			.distinctUntilChanged() // ignore if next search term is same as previous
			.switchMap(term => term
				? this.airportSearchService.searchAPI(term)
				: Observable.of<Airport[]>([]))
			.catch(error => {
				// TODO: add real error handling
				console.log(error);
				return Observable.of<Airport[]>([]);
			});
	}

	onFocus(): void {
		this.showSuggestions = this.searchStr.length > 0 ? true : false;
	}

	onBlur(event): void {
		this.showSuggestions = false;
	}

  onKeyUp($event): void {
		this.showSuggestions = this.searchStr.length > 0 ? true : false;
		this.search(this.searchStr);
	}

	onSelect(airport: Airport): void {
		this.selectedAirport = airport;
		this.searchStr = airport.name;
		this.showSuggestions = false;

	// TODO: limit number of suggestions in dropdown
	}
}
