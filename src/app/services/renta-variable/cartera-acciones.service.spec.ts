import { TestBed } from '@angular/core/testing';

import { CarteraAccionesService } from './cartera-acciones.service';

describe('CarteraAccionesService', () => {
  let service: CarteraAccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteraAccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
