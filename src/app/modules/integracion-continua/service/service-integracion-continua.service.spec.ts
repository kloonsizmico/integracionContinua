import { TestBed } from '@angular/core/testing';

import { ServiceIntegracionContinuaService } from './service-integracion-continua.service';

describe('ServiceIntegracionContinuaService', () => {
  let service: ServiceIntegracionContinuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIntegracionContinuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
