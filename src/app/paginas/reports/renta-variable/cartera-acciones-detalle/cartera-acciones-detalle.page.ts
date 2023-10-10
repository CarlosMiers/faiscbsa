import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentaaccionesDetalle } from 'src/app/models/rentavariable/carteraaccionesdetalle';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { CarteraAccionesDetalleService } from 'src/app/services/renta-variable/cartera-acciones-detalle.service';

@Component({
  selector: 'app-cartera-acciones-detalle',
  templateUrl: './cartera-acciones-detalle.page.html',
  styleUrls: ['./cartera-acciones-detalle.page.scss'],
})
export class CarteraAccionesDetallePage implements OnInit {

  ccabecera:any;
  loading: boolean = false;
  vmoneda: any = localStorage.getItem("moneda");
  cemisor: any = localStorage.getItem("emisor");
  ctitulo: any;
  cedula: string = JSON.stringify(localStorage.getItem("cedula"));
  comitente: string = JSON.stringify(localStorage.getItem("comitente"));
  DetalleCartera: any = []
 
   constructor(private _rentaaccionesServiceDetalle: CarteraAccionesDetalleService, private router: Router,
     private actRoute: ActivatedRoute, public loadingService: LoadingService) { }
 
   ngOnInit() {
     const cartera: RentaaccionesDetalle = {
       codigo: 0,
       comitente: this.comitente.replace('"', '').replace('"', ''),
       nombre: "",
       cedula: this.cedula.replace('"', '').replace('"', ''),
       valor_inversion: 0,
       moneda: 0,
       nombreemisor: "",
       fechacierre: new Date(),
       emisor:0,
       precio:0.000,
       cantidad:0.000, 
       nomalias:""
     }
 
     this.ccabecera=localStorage.getItem("cnombre_emisor");
     this.ccabecera=this.ccabecera.substring(0,30);
     this.getConsultar(this.comitente.toString(),this.vmoneda,this.cemisor.toString());
   }
 
 
   getConsultar(comitente: string,cmoneda : number, ctaemisor:number) {
     this._rentaaccionesServiceDetalle.getConsultaRentaVariableDetalle(comitente, cmoneda,ctaemisor).subscribe(data => {
       //CARGAMOS CONSULTA EN EL ARRAY
       this.DetalleCartera = data;
       //console.log(data);
     }, err => {
     });
     this.loading = false;
   }
 
}
