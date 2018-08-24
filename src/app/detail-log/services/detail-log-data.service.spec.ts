import { TestBed, inject } from '@angular/core/testing';

import { DetailLogDataService } from './detail-log-data.service';

describe('DetailLogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailLogDataService]
    });
  });

  it('should be created', inject([DetailLogDataService], (service: DetailLogDataService) => {
    expect(service).toBeTruthy();
  }));
});
