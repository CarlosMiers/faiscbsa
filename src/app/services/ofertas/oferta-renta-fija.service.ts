import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametrosService } from '../parametros/parametros.service';
import { Observable } from 'rxjs';
import { OfertaRentaFija } from 'src/app/models/ofertas/ofertarentafija';

@Injectable({
  providedIn: 'root'
})
export class OfertaRentaFijaService {

  base_path: String = '';
  private myApiUrl: string;
  private myApId: string;


  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/oferta'
    this.myApId = '/id?id=';
  }

  getConsultaOfertaRentaFija(id: number): Observable<OfertaRentaFija> {
    console.log("RUTA "+`${this.base_path}${this.myApiUrl}${this.myApId}${id}`)
    return this.http.get<OfertaRentaFija>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}`)
  }

}
