import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VencimientoCartera } from 'src/app/models/rentafija/vencimientocartera';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { VencimientoCarteraService } from 'src/app/services/renta-fija/vencimiento-cartera.service';

@Component({
  selector: 'app-vencimiento-cartera',
  templateUrl: './vencimiento-cartera.page.html',
  styleUrls: ['./vencimiento-cartera.page.scss'],
})
export class VencimientoCarteraPage implements OnInit {
  totalcartera: number = 0;
  fechainicio: any;
  fechafinal: any;
  loading: boolean = false;
  // vmoneda: any;
  ctitulo: any;
  cedula: string = JSON.stringify(localStorage.getItem("cedula"));
  comitente: string = JSON.stringify(localStorage.getItem("comitente"));
  ListaCartera: any = []
  estado = true;
  vmoneda: any = this.actRoute.snapshot.paramMap.get('idmoneda');
  constructor(private _vencimientoCarteraService: VencimientoCarteraService, private router: Router,
    private actRoute: ActivatedRoute, public loadingService: LoadingService) { }

  ngOnInit() {
    console.log("Moneda " + this.vmoneda);

    if (this.vmoneda == 1) {
      this.ctitulo = "Vencimientos en GS";
      this.estado = true;
    } else {
      this.ctitulo = "Vencimientos en USD";
      this.estado = false;
    }

    const cartera: VencimientoCartera = {
      codigo: 0,
      comitente: this.comitente.replace('"', '').replace('"', ''),
      nombre: "",
      cedula: this.cedula.replace('"', '').replace('"', ''),
      valor_nominal: 0,
      moneda: 0,
      nombreemisor: "",
      emisor: 0,
      tasa: 0.000,
      fechaemision: new Date(),
      vencimiento: new Date(),
      nomalias: ""
    }
    this.fechainicio = new Date().toISOString().substring(0, 10);
    this.fechafinal = new Date().toISOString().substring(0, 10);
  }


  Consultar() {
    this.totalcartera=0;
    this.loadingService.present({
      message: 'Aguarde un Momento.',
      duration: 300
    });

    this._vencimientoCarteraService.getConsultaVencimientos(this.comitente.toString(), this.vmoneda, this.fechainicio, this.fechafinal).subscribe(data => {
      //CARGAMOS CONSULTA EN EL ARRAY
      this.ListaCartera = data;
      console.log(data);
      let totalRow = this.ListaCartera.length;
      totalRow -= 1;
      for (let i = 0; i <= (totalRow); i++) {
        this.totalcartera += parseFloat(this.ListaCartera[i].valor_nominal);
      }
    }, err => {
    });
    this.loading = false;
   }
}
