import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteraAcciones } from 'src/app/models/rentavariable/carteraacciones';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { CarteraAccionesService } from 'src/app/services/renta-variable/cartera-acciones.service';

@Component({
  selector: 'app-cartera-acciones',
  templateUrl: './cartera-acciones.page.html',
  styleUrls: ['./cartera-acciones.page.scss'],
})
export class CarteraAccionesPage implements OnInit {

  loading: boolean = false;
  totalcartera: number = 0;
  vmoneda: any;
  ctitulo: any;
  cedula: string = JSON.stringify(localStorage.getItem("cedula"));
  comitente: string = JSON.stringify(localStorage.getItem("comitente"));

  ListaCartera: any = []
  constructor(private _rentavariableService: CarteraAccionesService, private router: Router,
    private actRoute: ActivatedRoute, public loadingService: LoadingService) { }

  ngOnInit() {
    
    this.loadingService.present({
      message: 'Aguarde un Momento.',
      duration: 300
    });

    const cartera: CarteraAcciones = {
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

  getConsultar(cedula: string) {
    this.vmoneda = this.actRoute.snapshot.paramMap.get('idmoneda');
    if(this.vmoneda==1){
      this.ctitulo="Cartera en Guaraníes";
    }else{
      this.ctitulo="Cartera en Dólares";
    }
    this._rentavariableService.getConsultaCarteraAcciones(this.comitente, this.vmoneda).subscribe(data => {
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
    this.router.navigate(['cartera-acciones-detalle']);
  }



}
