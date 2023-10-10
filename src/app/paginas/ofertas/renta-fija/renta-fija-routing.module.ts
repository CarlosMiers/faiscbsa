import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentaFijaPage } from './renta-fija.page';

const routes: Routes = [
  {
    path: '',
    component: RentaFijaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentaFijaPageRoutingModule {}
