import { TestBed } from '@angular/core/testing';

import { CountryCoinService } from './country-coin.service';

describe('CountryCoinService', () => {
  let service: CountryCoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryCoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
