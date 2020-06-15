import { Component, OnInit } from '@angular/core';

import { AgendaService } from '../servicios/agenda.service';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-agenda-principal',
  templateUrl: './agenda-principal.component.html',
  styleUrls: ['./agenda-principal.component.scss']
})
export class AgendaPrincipalComponent implements OnInit {

 public todosContactos = [];


  constructor(private agenda:AgendaService) { }

  obtenerTodos(){
    this.agenda.obtenerTodos().subscribe(usuario => JSON.parse(this.todosContactos = usuario));
  }
  ngOnInit(): void {
    this.obtenerTodos();
  }


}
