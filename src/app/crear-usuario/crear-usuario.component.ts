import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../servicios/agenda.service';
import { Agenda } from '../agenda.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Agenda = {
    id:0,
    nombre:'',
    apellido:'',
    telefono: 0,
    correo:''
  };

  constructor(
    private agendaService: AgendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    console.log(this.usuario)
    this.agendaService.crearUsuario(this.usuario).subscribe(usuario => console.log(usuario)
    )
  }
}
