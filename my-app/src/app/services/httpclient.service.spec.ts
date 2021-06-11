import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './httpclient.service';

describe('ApiListService', () => {
  let service: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
