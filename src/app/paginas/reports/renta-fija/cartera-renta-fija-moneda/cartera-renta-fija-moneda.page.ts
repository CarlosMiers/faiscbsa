
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rentafijaemisor } from 'src/app/models/rentafija/rentafijaemisor';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { RentaFijaService } from 'src/app/services/renta-fija/renta-fija.service';

@Component({
  selector: 'app-cartera-renta-fija-moneda',
  templateUrl: './cartera-renta-fija-moneda.page.html',
  styleUrls: ['./cartera-renta-fija-moneda.page.scss'],
})
export class CarteraRentaFijaMonedaPage implements OnInit {
  loading: boolean = false;
  totalcartera: number = 0;
  estado=true;
  vmoneda: any;
  ctitulo: any;
  cedula: String = JSON.stringify(localStorage.getItem("cedula"));
  comitente: String = JSON.stringify(localStorage.getItem("comitente"));

  ListaCartera: any = []
  constructor(private _rentafijaService: RentaFijaService, private router: Router,
    private actRoute: ActivatedRoute, public loadingService: LoadingService) { }

  ngOnInit() {
    
    this.loadingService.present({
      message: 'Aguarde un Momento.',
      duration: 300
    });

    const cartera: Rentafijaemisor = {
      codigo: 0,
      comitente: this.comitente.replace('"', '').replace('"', ''),
      nombre: "",
      cedula: this.cedula.replace('"', '').replace('"', ''),
      total: 0,
      emisor: 0,
      moneda: 0,
      nombreemisor: ""
    }
    this.loading = true;
    this.getConsultar(this.comitente.toString());
  }

  getConsultar(comitente: string) {
    this.vmoneda = this.actRoute.snapshot.paramMap.get('idmoneda');
    if(this.vmoneda==1){
      this.estado=true;
      this.ctitulo="Cartera en Guaraníes";
    }else{
      this.ctitulo="Cartera en Dólares";
      this.estado=false;
    }
    this._rentafijaService.getConsultaRentaFija(comitente, this.vmoneda).subscribe(data => {
      //CARGAMOS CONSULTA EN EL ARRAY
      this.ListaCartera = data;
      //console.log(data);

      //CALCULAMOS EL TOTAL DE CARTERA RECORRIENDO EL ARRAY
      let totalRow = this.ListaCartera.length;
      totalRow -= 1;
      for (let i = 0; i <= (totalRow); i++) {
        this.totalcartera += parseFloat(this.ListaCartera[i].total);
      }
    }, err => {
    });
    this.loading = false;
  }


  VerDetalle(cemisor:string,cnombre_emisor:string) {
    localStorage.setItem('emisor', cemisor);
    localStorage.setItem('cnombre_emisor', cnombre_emisor);
    localStorage.setItem('moneda',this.vmoneda);
    this.router.navigate(['cartera-renta-fija-detallado']);
  }



}
