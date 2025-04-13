import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }, // Redireciona para a lista de clientes ao carregar a aplicação
  { path: 'clientes', component: ClientesComponent }, // Rota para a página de clientes
  { path: 'agendamentos', component: AgendamentosComponent }, // Rota para a página de agendamentos
  { path: '**', redirectTo: '/clientes' }, // Rota padrão para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas para o Angular
  exports: [RouterModule], // Exporta o módulo para ser usado no resto da aplicação
})
export class AppRoutingModule {}
