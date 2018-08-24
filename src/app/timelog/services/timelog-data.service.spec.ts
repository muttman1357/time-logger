import { TestBed, inject } from '@angular/core/testing';

import { TimelogDataService } from './timelog-data.service';

describe('TimelogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelogDataService]
    });
  });

  it('should be created', inject([TimelogDataService], (service: TimelogDataService) => {
    expect(service).toBeTruthy();
  }));
});
