import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteraRentaFijaMonedaPage } from './cartera-renta-fija-moneda.page';

const routes: Routes = [
  {
    path: '',
    component: CarteraRentaFijaMonedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteraRentaFijaMonedaPageRoutingModule {}
