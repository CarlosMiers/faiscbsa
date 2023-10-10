import { Injectable } from '@angular/core';
import { CarteraAcciones } from 'src/app/models/rentavariable/carteraacciones';
import { ParametrosService } from '../parametros/parametros.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteraAccionesService {

  base_path: String = '';
  private myApiUrl: string;
  private myApId: string;
  private myApIdMoneda: string;

  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/cartera/rentaacciones'
    this.myApId = '/id?id=';
    this.myApIdMoneda="&moneda=";
  }
  
   getConsultaCarteraAcciones(id:string, moneda:number): Observable<CarteraAcciones> {
    id= id.replace('"', '').replace('"', '');
    return this.http.get<CarteraAcciones>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}${this.myApIdMoneda}${moneda}`)
  }

}
