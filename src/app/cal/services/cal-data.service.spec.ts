import { TestBed, inject } from '@angular/core/testing';

import { CalDataService } from './cal-data.service';

describe('CalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalDataService]
    });
  });

  it('should be created', inject([CalDataService], (service: CalDataService) => {
    expect(service).toBeTruthy();
  }));
});
