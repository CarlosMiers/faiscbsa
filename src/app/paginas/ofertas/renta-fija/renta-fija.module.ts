import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentaFijaPageRoutingModule } from './renta-fija-routing.module';

import { RentaFijaPage } from './renta-fija.page';
import { PipesModule } from "../../../pipes/filtro/pipes.module";

@NgModule({
    declarations: [RentaFijaPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RentaFijaPageRoutingModule,
        PipesModule
    ]
})
export class RentaFijaPageModule {}
