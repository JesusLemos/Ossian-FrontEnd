import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor( private http: HttpClient) { }

  obtenerTodos():Observable<any>{

    return this.http.get('http://localhost:3000/agenda/obtenertodos');
  }

}
