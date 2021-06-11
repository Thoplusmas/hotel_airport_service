import { TestBed } from '@angular/core/testing';

import { ApiListService } from './apilist.service';

describe('ProductService', () => {
  let service: ApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
