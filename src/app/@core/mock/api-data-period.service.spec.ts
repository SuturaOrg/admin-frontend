import { TestBed } from '@angular/core/testing';

import { ApiDataPeriodService } from './api-data-period.service';

describe('ApiDataPeriodService', () => {
  let service: ApiDataPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
