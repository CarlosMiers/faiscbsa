import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteraRentaFijaMonedaPageRoutingModule } from './cartera-renta-fija-moneda-routing.module';

import { CarteraRentaFijaMonedaPage } from './cartera-renta-fija-moneda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteraRentaFijaMonedaPageRoutingModule
  ],
  declarations: [CarteraRentaFijaMonedaPage]
})
export class CarteraRentaFijaMonedaPageModule {}
