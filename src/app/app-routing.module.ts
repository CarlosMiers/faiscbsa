import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'cartera-renta-fija-moneda/:idmoneda',
    loadChildren: () => import('./paginas/reports/renta-fija/cartera-renta-fija-moneda/cartera-renta-fija-moneda.module').
      then(m => m.CarteraRentaFijaMonedaPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./paginas/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paginas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./paginas/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'cartera-renta-fija-detallado',
    loadChildren: () => import('./paginas/reports/renta-fija/cartera-renta-fija-detallado/cartera-renta-fija-detallado.module').then( m => m.CarteraRentaFijaDetalladoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'cartera-acciones/:idmoneda',
    loadChildren: () => import('./paginas/reports/renta-variable/cartera-acciones/cartera-acciones.module').then( m => m.CarteraAccionesPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'cartera-acciones-detalle',
    loadChildren: () => import('./paginas/reports/renta-variable/cartera-acciones-detalle/cartera-acciones-detalle.module').then( m => m.CarteraAccionesDetallePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'vencimiento-cartera/:idmoneda',
    loadChildren: () => import('./paginas/reports/renta-fija/vencimiento-cartera/vencimiento-cartera.module').then( m => m.VencimientoCarteraPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'mensaje-texto',
    loadChildren: () => import('./paginas/mensaje-texto/mensaje-texto.module').then( m => m.MensajeTextoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'page1',
    loadChildren: () => import('./paginas/informes/page1/page1.module').then( m => m.Page1PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'page2',
    loadChildren: () => import('./paginas/informes/page2/page2.module').then( m => m.Page2PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'page3',
    loadChildren: () => import('./paginas/informes/page3/page3.module').then( m => m.Page3PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'page4',
    loadChildren: () => import('./paginas/informes/page4/page4.module').then( m => m.Page4PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'renta-fija',
    loadChildren: () => import('./paginas/ofertas/renta-fija/renta-fija.module').then( m => m.RentaFijaPageModule), canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
