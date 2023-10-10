import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VencimientoCarteraPage } from './vencimiento-cartera.page';

const routes: Routes = [
  {
    path: '',
    component: VencimientoCarteraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VencimientoCarteraPageRoutingModule {}
