import { Component, OnInit } from '@angular/core';

import { AgendaService } from '../servicios/agenda.service';



@Component({
  selector: 'app-agenda-principal',
  templateUrl: './agenda-principal.component.html',
  styleUrls: ['./agenda-principal.component.scss']
})
export class AgendaPrincipalComponent implements OnInit {

 public todosContactos = [];


  constructor(private agenda: AgendaService) { }

  obtenerTodos(){
    this.agenda.obtenerTodos().subscribe(usuario =>this.todosContactos = usuario);
  }
  ngOnInit(): void {
    this.obtenerTodos();
  }


}
