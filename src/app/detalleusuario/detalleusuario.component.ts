import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AgendaService } from '../servicios/agenda.service';
import { Agenda } from '../agenda.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrls: ['./detalleusuario.component.scss']
})
export class DetalleusuarioComponent implements OnInit {
  usuario: Agenda = {
    id:0,
    nombre:'',
    apellido:'',
    telefono: 0,
    correo:''
  };
  constructor(
    private route: ActivatedRoute,
    private agendaService: AgendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(( params: Params ) => {
      const id = params.id;
      this.agendaService.obtenerUsuario(id).subscribe(usuario => this.usuario = usuario);

      });
  }
  actualizarUsuario(){
    console.log('funcion' , this.usuario)
    this.agendaService.actualizarUsuario(this.usuario , this.usuario.id).subscribe(usuario => console.log(usuario))
  }
  eliminarUsuario(){
    console.log('se borro');
    this.agendaService.eliminarUsuario(this.usuario.id).subscribe(usuario =>{
      console.log(usuario);
      this.router.navigate(['/contactos'])

    })
  }

}
