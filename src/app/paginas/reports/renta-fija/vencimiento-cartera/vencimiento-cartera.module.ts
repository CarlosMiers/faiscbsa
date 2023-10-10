import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VencimientoCarteraPageRoutingModule } from './vencimiento-cartera-routing.module';

import { VencimientoCarteraPage } from './vencimiento-cartera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VencimientoCarteraPageRoutingModule
  ],
  declarations: [VencimientoCarteraPage]
})
export class VencimientoCarteraPageModule {}
