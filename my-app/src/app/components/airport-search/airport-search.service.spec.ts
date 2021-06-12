import { TestBed, inject } from '@angular/core/testing';

import { AirportSearchService } from './airport-search.service';

describe('AirportSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AirportSearchService ]
    });
  });

  it('should ...', inject([AirportSearchService], (service: AirportSearchService) => {
    expect(service).toBeTruthy();
  }));
});
