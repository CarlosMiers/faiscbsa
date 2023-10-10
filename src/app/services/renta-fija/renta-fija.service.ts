import { Injectable } from '@angular/core';
import { ParametrosService } from '../parametros/parametros.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rentafijaemisor } from 'src/app/models/rentafija/rentafijaemisor';


@Injectable({
  providedIn: 'root'
})
export class RentaFijaService {

  base_path: String = '';
  private myApiUrl: string;
  private myApId: string;
  private myApIdMoneda: string;

  

  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/cartera/rentafija'
    this.myApId = '/id?id=';
    this.myApIdMoneda="&moneda=";
  }
  
   getConsultaRentaFija(id:string, moneda:number): Observable<Rentafijaemisor> {
    id= id.replace('"', '').replace('"', '');
    return this.http.get<Rentafijaemisor>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}${this.myApIdMoneda}${moneda}`)
  }


}
