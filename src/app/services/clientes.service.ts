import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParametrosService } from './parametros/parametros.service';
import { Clientes } from '../models/clientes/clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  base_path: String = '';
  private myApiUrl: string;

  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/cliente'
  }

  idCliente(cliente: Clientes): Observable<string> {
    return this.http.post<string>(`${this.base_path}${this.myApiUrl}/id`, cliente);
  }
  

}
