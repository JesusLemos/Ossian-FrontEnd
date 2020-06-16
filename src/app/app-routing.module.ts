import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaPrincipalComponent } from './agenda-principal/agenda-principal.component';
import { DetalleusuarioComponent } from './detalleusuario/detalleusuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/contactos',
    pathMatch: 'full',
  },
  {
    path: 'contactos' ,
    component: AgendaPrincipalComponent

  },
  {
    path: 'contactos/:id' ,
    component: DetalleusuarioComponent

  },
  {
    path: 'crear-usuario' ,
    component: CrearUsuarioComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
