import { TestBed } from '@angular/core/testing';

import { GetCartDataService } from './get-cart-data.service';

describe('GetCartDataService', () => {
  let service: GetCartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
