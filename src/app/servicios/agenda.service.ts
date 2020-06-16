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
  obtenerUsuario(id:number):Observable<any>{
    return this.http.get('http://localhost:3000/agenda/usuario/'+id);
  }
  actualizarUsuario(usuario , id){
    console.log(usuario , id);
    return this.http.patch('http://localhost:3000/agenda/actualizar/'+id, usuario);
  } 
  eliminarUsuario(id){
    return this.http.delete('http://localhost:3000/agenda/eliminar/'+id);
  }
}