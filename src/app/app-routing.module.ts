import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaPrincipalComponent } from './agenda-principal/agenda-principal.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home' ,
    component: AgendaPrincipalComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
