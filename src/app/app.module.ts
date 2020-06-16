import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaPrincipalComponent } from './agenda-principal/agenda-principal.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { DetalleusuarioComponent } from './detalleusuario/detalleusuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaPrincipalComponent,
    HeaderComponent,
    DetalleusuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
