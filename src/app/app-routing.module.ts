import { DashboardComponent } from './Dashboard/Dashboard.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { AlunosComponent } from './Alunos/Alunos.component';
import { ProfessoresComponent } from './Professores/Professores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Gerenciamento de Rotas
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
