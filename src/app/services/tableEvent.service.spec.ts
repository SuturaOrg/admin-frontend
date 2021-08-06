/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableEventService } from './tableEvent.service';

describe('Service: TableEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableEventService],
    });
  });

  it('should ...', inject([TableEventService], (service: TableEventService) => {
    expect(service).toBeTruthy();
  }));
});
