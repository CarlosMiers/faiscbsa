import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeTextoPage } from './mensaje-texto.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeTextoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeTextoPageRoutingModule {}
