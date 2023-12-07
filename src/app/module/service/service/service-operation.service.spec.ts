import { TestBed } from '@angular/core/testing';

import { ServiceOperationService } from './service-operation.service';

describe('ServiceOperationService', () => {
  let service: ServiceOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
