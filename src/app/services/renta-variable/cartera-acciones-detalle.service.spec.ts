import { TestBed } from '@angular/core/testing';

import { CarteraAccionesDetalleService } from './cartera-acciones-detalle.service';

describe('CarteraAccionesDetalleService', () => {
  let service: CarteraAccionesDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteraAccionesDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
