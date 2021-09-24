import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './Alunos/Alunos.component';
import { ProfessoresComponent } from './Professores/Professores.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NavComponent } from './Nav/Nav.component';

@NgModule({
  declarations: [					
    AppComponent,
      AlunosComponent,
      ProfessoresComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
