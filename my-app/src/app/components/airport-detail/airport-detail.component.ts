import { Component, Input } from '@angular/core';
import { Airport } from '../airport'

@Component({
	selector: 'airport-detail',
	templateUrl: './airport-detail.component.html',
	styleUrls: ['./airport-detail.component.scss']
})
export class AirportDetailComponent {
	@Input() airport: Airport;

	registerAirport(airport: Airport){
		this.airport = airport;
	}
}
