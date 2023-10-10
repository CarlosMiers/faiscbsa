import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametrosService } from '../parametros/parametros.service';
import { Observable } from 'rxjs';
import { VencimientoCartera } from 'src/app/models/rentafija/vencimientocartera';

@Injectable({
  providedIn: 'root'
})
export class VencimientoCarteraService {
  base_path: String = '';
  private myApiUrl: string;
  private myApId: string;
  private myApIdMoneda: string;
  private myApInicio: string;
  private myApFinal: string;

  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/cartera/vencimientocartera'
    this.myApId = '/id?id=';
    this.myApIdMoneda="&moneda=";
    this.myApInicio="&fechainicio=";
    this.myApFinal="&fechafinal=";    
  }

  getConsultaVencimientos(id:string, moneda:number,fechainicio:string,fechafinal:string): Observable<VencimientoCartera> {
    id= id.replace('"', '').replace('"', '');
    console.log("servicio id "+id);
    return this.http.get<VencimientoCartera>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}${this.myApIdMoneda}${moneda}${this.myApInicio}${fechainicio}${this.myApFinal}${fechafinal}`);
  }
}