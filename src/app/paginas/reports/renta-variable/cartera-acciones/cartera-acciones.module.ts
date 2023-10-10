import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteraAccionesPageRoutingModule } from './cartera-acciones-routing.module';

import { CarteraAccionesPage } from './cartera-acciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteraAccionesPageRoutingModule
  ],
  declarations: [CarteraAccionesPage]
})
export class CarteraAccionesPageModule {}
