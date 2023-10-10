import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteraRentaFijaDetalladoPageRoutingModule } from './cartera-renta-fija-detallado-routing.module';

import { CarteraRentaFijaDetalladoPage } from './cartera-renta-fija-detallado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteraRentaFijaDetalladoPageRoutingModule
  ],
  declarations: [CarteraRentaFijaDetalladoPage]
})
export class CarteraRentaFijaDetalladoPageModule {}
