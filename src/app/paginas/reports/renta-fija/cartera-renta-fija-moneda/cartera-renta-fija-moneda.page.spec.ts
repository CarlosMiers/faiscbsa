import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteraRentaFijaMonedaPage } from './cartera-renta-fija-moneda.page';

describe('CarteraRentaFijaMonedaPage', () => {
  let component: CarteraRentaFijaMonedaPage;
  let fixture: ComponentFixture<CarteraRentaFijaMonedaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteraRentaFijaMonedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteraRentaFijaMonedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
