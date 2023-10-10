import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametrosService } from '../parametros/parametros.service';
import { Observable } from 'rxjs';
import { RentafijaemisorDetalle } from 'src/app/models/rentafija/rentafijaemisordetalle';

@Injectable({
  providedIn: 'root'
})
export class RentaFijaDetalleService {

  base_path: String = '';
  private myApiUrl: string;
  private myApId: string;
  private myApIdMoneda: string;
  private myApIdEmisor: string;

  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/cartera/rentafijadetalle'
    this.myApId = '/id?id=';
    this.myApIdMoneda="&moneda=";
    this.myApIdEmisor="&emisor=";
  }

  getConsultaRentaFija(id:string, moneda:number,emisor:number): Observable<RentafijaemisorDetalle> {
    id= id.replace('"', '').replace('"', '');
    return this.http.get<RentafijaemisorDetalle>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}${this.myApIdMoneda}${moneda}${this.myApIdEmisor}${emisor}`);
  }

}
