import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeTextoPageRoutingModule } from './mensaje-texto-routing.module';
import { MensajeTextoPage } from './mensaje-texto.page';
import { SMS } from "@awesome-cordova-plugins/sms/ngx";

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeTextoPageRoutingModule
  ],
  providers: [
    SMS
    ],

  declarations: [MensajeTextoPage]
})
export class MensajeTextoPageModule {}
