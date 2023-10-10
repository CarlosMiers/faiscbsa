import { Component, OnInit } from '@angular/core';
import { SMS } from "@awesome-cordova-plugins/sms/ngx";
import { ToastController } from '@ionic/angular';
import { Asesores } from 'src/app/models/asesor/asesor';
import { AsesorClienteService } from 'src/app/services/asesor-cliente/asesor-cliente.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-mensaje-texto',
  templateUrl: './mensaje-texto.page.html',
  styleUrls: ['./mensaje-texto.page.scss'],
})
export class MensajeTextoPage implements OnInit {

  cedula: String = JSON.stringify(localStorage.getItem("cedula"));
  mensaje: any;
  loading: boolean = false;
  ListaCedula: any = []

  constructor(private sms: SMS, public toastCtrl: ToastController,
    public loadingService: LoadingService, private _asesoresService: AsesorClienteService) { }

  ngOnInit() {

    const asesores: Asesores = {
      cedula: this.cedula.replace('"', '').replace('"', ''),
      celular: ""
    }

    this.sms.send('595983493022', 'prueba de funcionamiento');
  }

  send() {

    this.loading = true;
    this._asesoresService.getConsultaCedula(this.cedula.toString()).subscribe(data => {
      //CARGAMOS CONSULTA EN EL ARRAY
      this.ListaCedula = data;
      console.log("devuelto desde la api " + this.ListaCedula[0].celular);
      console.log("NUMERO DE CELULAR " + this.ListaCedula[0].celular);
    }, err => {
    });


    console.log(this.mensaje.length);

    if (this.mensaje.length == 0 || this.mensaje.length == 0) {
      this.loadingService.present({
        message: 'El campo del Mensaje es Obligatorio.',
        duration: 300
      });
      return;
    }

    this.sms.send("595" + this.ListaCedula[0].celular, this.mensaje)
      .then(async () => {
        console.log(this.mensaje);
        let toast = this.toastCtrl.create({
          message: 'Mensaje Enviado Correctamente',
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
