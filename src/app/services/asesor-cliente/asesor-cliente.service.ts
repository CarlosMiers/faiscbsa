import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametrosService } from '../parametros/parametros.service';
import { Asesores } from 'src/app/models/asesor/asesor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsesorClienteService {


  base_path: String = '';
  private myApiUrl: string;
  private myApId:string;
  
  constructor(private http: HttpClient, public parametrosService: ParametrosService) {
    this.base_path = parametrosService.direccionIp;
    this.myApiUrl = 'api/asesor'
    this.myApId = '/id?id=';
  }

  getConsultaCedula(id:string): Observable<Asesores> {
    id= id.replace('"', '').replace('"', '');
    return this.http.get<Asesores>(`${this.base_path}${this.myApiUrl}${this.myApId}${id}`);
  }
}
