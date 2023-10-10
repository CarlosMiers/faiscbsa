import { Component, OnInit } from '@angular/core';
import { OfertaRentaFija } from '../../../models/ofertas/ofertarentafija';
import { OfertaRentaFijaService } from 'src/app/services/ofertas/oferta-renta-fija.service';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { AsesorClienteService } from 'src/app/services/asesor-cliente/asesor-cliente.service';
import { Asesores } from 'src/app/models/asesor/asesor';

@Component({
  selector: 'app-renta-fija',
  templateUrl: './renta-fija.page.html',
  styleUrls: ['./renta-fija.page.scss'],
})
export class RentaFijaPage implements OnInit {
  textoBuscar = "";
  loading: boolean = false;
  OfertaReporte: any = []
  idoferta: number = 0;
  cedula: String = JSON.stringify(localStorage.getItem("cedula"));
  mensaje: any;
  ListaCedula: any = []



  constructor(private sms: SMS,private _ofertarentafija: OfertaRentaFijaService,
    public router: Router,private _asesoresService: AsesorClienteService,
    private toastCtrl: ToastController,
    private ActionSheetController: ActionSheetController) { }

  ngOnInit() {
    const asesores: Asesores = {
      cedula: this.cedula.replace('"', '').replace('"', ''),
      celular: ""
    }

    const ofertaRfija: OfertaRentaFija = {
      id: 0,
      nombreemisor: "",
      valor_inversion: 0,
      moneda: 0,
      tasa: 0.000,
      validohasta: new Date(),
      nombretitulo: "",
      nombremoneda: "",
      comentario: "",
    }
    this.getConsultar(1);

  }


  getConsultar(renta: number) {
    this._ofertarentafija.getConsultaOfertaRentaFija(renta).subscribe(data => {
      //CARGAMOS CONSULTA EN EL ARRAY
      this.OfertaReporte = data;
      console.log(data);
    }, err => {
    });
    this.loading = false;

  }

  buscar(event: any) {
    console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

  async presentActionSheet(idof: any) {
    const actionSheet = await this.ActionSheetController.create({
      header: 'Opciones del Cliente',
      cssClass: 'my-alert',
      mode: 'md',
      buttons: [{
        text: 'Estoy Interesado',
        icon: 'checkmark-done-circle-outline',
        handler: () => {
          this.idoferta = idof;
          this.mostrarSeleccionado();
          //this.router.navigate(['edit-clientes',{id}])
        }
      },

      {
        text: 'Salir',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async mostrarSeleccionado() {
//    console.log("OFERTA SELECCIONADA " + this.idoferta);
//    this.sms.send('595983493022', 'Cliente Interesado en la Oferta '+this.idoferta);

      this.loading = true;
      this._asesoresService.getConsultaCedula(this.cedula.toString()).subscribe(data => {
        //CARGAMOS CONSULTA EN EL ARRAY
        this.ListaCedula = data;
        console.log("devuelto desde la api " + this.ListaCedula[0].celular);
        console.log("NUMERO DE CELULAR " + this.ListaCedula[0].celular);
      }, err => {
      });

      console.log("A PUNTO DE ENVIAR MENSAJE AL  CELULAR " + this.ListaCedula[0].celular);
      this.sms.send("595" + this.ListaCedula[0].celular, "Cliente Interesado en la Oferta N°, "+this.idoferta+", favor contactar en la brevedad.")
        .then(async () => {
          console.log(this.mensaje);
          let toast = this.toastCtrl.create({
            message: 'Muchas Gracias, nos pondremos en contacto con ud.',
            duration: 3000
          });
          this.mensaje="";
          (await toast).present();
        }, async () => {
          console.log(this.mensaje);
          let toast = this.toastCtrl.create({
            message: 'Fallo en el Envío del Mensaje',
            duration: 3000
          });
          (await toast).present();
        });
      this.loading = false;
  }

}
