import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteraRentaFijaDetalladoPage } from './cartera-renta-fija-detallado.page';

describe('CarteraRentaFijaDetalladoPage', () => {
  let component: CarteraRentaFijaDetalladoPage;
  let fixture: ComponentFixture<CarteraRentaFijaDetalladoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteraRentaFijaDetalladoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteraRentaFijaDetalladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
