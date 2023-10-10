import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametrosService } from '../parametros/parametros.service';
import { Observable } from 'rxjs';
import { RentaaccionesDetalle } from 'src/app/models/rentavariable/carteraaccionesdetalle';

@Injectable({
  providedIn: 'root'
})
export class CarteraAccionesDetalleService {

  
  base_path: String = '';
  private myApiUrl: string;
  private myApId: string;
  private myApIdMoneda: string;
  private myApIdEmisor: string;

  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/cartera/rentaaccionesdetalle'
    this.myApId = '/id?id=';
    this.myApIdMoneda="&moneda=";
    this.myApIdEmisor="&emisor=";
  }

  getConsultaRentaVariableDetalle(id:string, moneda:number,emisor:number): Observable<RentaaccionesDetalle> {
    id= id.replace('"', '').replace('"', '');
    return this.http.get<RentaaccionesDetalle>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}${this.myApIdMoneda}${moneda}${this.myApIdEmisor}${emisor}`);
  }

}
