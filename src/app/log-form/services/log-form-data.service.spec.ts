import { TestBed, inject } from '@angular/core/testing';

import { LogFormDataService } from './log-form-data.service';

describe('LogFormDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogFormDataService]
    });
  });

  it('should be created', inject([LogFormDataService], (service: LogFormDataService) => {
    expect(service).toBeTruthy();
  }));
});
