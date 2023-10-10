import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteraAccionesPage } from './cartera-acciones.page';

const routes: Routes = [
  {
    path: '',
    component: CarteraAccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteraAccionesPageRoutingModule {}
