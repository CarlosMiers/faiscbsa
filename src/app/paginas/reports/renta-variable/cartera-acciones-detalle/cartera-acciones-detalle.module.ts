import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteraAccionesDetallePageRoutingModule } from './cartera-acciones-detalle-routing.module';

import { CarteraAccionesDetallePage } from './cartera-acciones-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteraAccionesDetallePageRoutingModule
  ],
  declarations: [CarteraAccionesDetallePage]
})
export class CarteraAccionesDetallePageModule {}
