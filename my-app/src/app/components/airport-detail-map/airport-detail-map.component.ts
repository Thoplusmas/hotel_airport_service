import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NguiMapComponent } from '@ngui/map';

import { Airport } from '../airport';

const ZOOM_LEVEL = "13";

@Component({
  selector: 'airport-detail-map',
  templateUrl: './airport-detail-map.component.html',
  styleUrls: ['./airport-detail-map.component.scss']
})
export class AirportDetailMapComponent implements OnInit, OnChanges {

  public _pos: any;
  public _zoomlevel: any;

  @Input() airport: Airport;

  constructor() {}

  ngOnInit(){
    this._pos = this.airport ? this.getPosition(this.airport) : {lat: 0, lng: 0};
    this.resetZoom();
  }

  ngOnChanges(){
    this._pos = this.airport ? this.getPosition(this.airport) : this._pos;
    this.resetZoom();
  }

  private getPosition(airport: Airport) {
    return {
      lat: airport.latitude,
      lng: airport.longitude
    }
  }

  private resetZoom() {
    this._zoomlevel = ZOOM_LEVEL;
  }

}
