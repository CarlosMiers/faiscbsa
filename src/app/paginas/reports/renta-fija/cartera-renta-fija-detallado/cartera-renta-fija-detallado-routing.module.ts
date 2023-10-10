import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteraRentaFijaDetalladoPage } from './cartera-renta-fija-detallado.page';

const routes: Routes = [
  {
    path: '',
    component: CarteraRentaFijaDetalladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteraRentaFijaDetalladoPageRoutingModule {}
