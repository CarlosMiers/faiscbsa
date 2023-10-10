import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 4000
    }
  };  



  loading: boolean = false;
  
  
  codigo: number = 0
  cedula: String = JSON.stringify(localStorage.getItem("cedula"));
  
  ListaCliente: any = []

  constructor(private _clienteService: ClientesService, private router: Router, public loadingService: LoadingService) { }


  ngOnInit() {
  }

  MostrarCliente() {
    
    const cliente: Clientes = {
      codigo: this.codigo,
      nombre: "",
      cedula: this.cedula.replace('"', '').replace('"', ''),
    }

    this.loading = true;
    this._clienteService.idCliente(cliente).subscribe(data => {
      console.log(data);
    }, err => {

    });
  }

}
