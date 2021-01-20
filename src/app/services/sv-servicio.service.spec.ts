import { TestBed } from '@angular/core/testing';

import { SvServicioService } from './sv-servicio.service';

describe('SvServicioService', () => {
  let service: SvServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
