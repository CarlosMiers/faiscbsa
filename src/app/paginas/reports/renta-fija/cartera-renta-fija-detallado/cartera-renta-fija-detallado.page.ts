import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentafijaemisorDetalle } from 'src/app/models/rentafija/rentafijaemisordetalle';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { RentaFijaDetalleService } from 'src/app/services/renta-fija/renta-fija-detalle.service';

@Component({
  selector: 'app-cartera-renta-fija-detallado',
  templateUrl: './cartera-renta-fija-detallado.page.html',
  styleUrls: ['./cartera-renta-fija-detallado.page.scss'],
})
export class CarteraRentaFijaDetalladoPage implements OnInit {
 ccabecera:any;
 loading: boolean = false;
 vmoneda: any = localStorage.getItem("moneda");
 cemisor: any = localStorage.getItem("emisor");
 estadodetalle=true;
 ctitulo: any;
 cedula: String = JSON.stringify(localStorage.getItem("cedula"));
 comitente: String = JSON.stringify(localStorage.getItem("comitente"));

 DetalleCartera: any = []

  constructor(private _rentafijaServiceDetalle: RentaFijaDetalleService, private router: Router,
    private actRoute: ActivatedRoute, public loadingService: LoadingService) { }

  ngOnInit() {
    if(this.vmoneda==1){
      this.estadodetalle=true;
    }else{
      this.estadodetalle=false;
    }
    const cartera: RentafijaemisorDetalle = {
      codigo: 0,
      nombre: "",
      cedula: this.cedula.replace('"', '').replace('"', ''),
      comitente: this.comitente.replace('"', '').replace('"', ''),
      valor_inversion: 0,
      moneda: 0,
      nombreemisor: "",
      emisor:0,
      tasa:0.000,
      fechaemision: new Date(),
      vencimiento:new Date(),
      nomalias:""
    }

    this.ccabecera=localStorage.getItem("cnombre_emisor");
    this.ccabecera=this.ccabecera.substring(0,30);
    this.getConsultar(this.comitente.toString(),this.vmoneda,this.cemisor.toString());
  }


  getConsultar(comitente: string,cmoneda : number, ctaemisor:number) {
    this._rentafijaServiceDetalle.getConsultaRentaFija(comitente, cmoneda,ctaemisor).subscribe(data => {
      //CARGAMOS CONSULTA EN EL ARRAY
      this.DetalleCartera = data;
      //console.log(data);
    }, err => {
    });
    this.loading = false;
  }




}
