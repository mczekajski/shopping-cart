import { TestBed } from '@angular/core/testing';

import { GetProductsDataService } from './get-products-data.service';

describe('GetProductsDataService', () => {
  let service: GetProductsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
