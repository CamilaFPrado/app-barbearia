import { HttpClientModule } from '@angular/common/http'; // Para requisições HTTP
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para formulários com ngModel
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'; // Para o roteamento das páginas
import { AppComponent } from './app.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component'; // Componente de agendamentos
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AgendamentoService } from './services/agendamento.service'; // Serviço de agendamento
import { ClienteService } from './services/cliente.service'; // Serviço de clientes

@NgModule({
  declarations: [
    AppComponent,
    AgendamentosComponent, // Aqui dentro de declarations
    ClientesComponent, // Aqui também
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule, // Necessário para fazer requisições HTTP
    FormsModule, // Necessário para trabalhar com formulários e ngModel
    RouterModule.forRoot([
      { path: '', redirectTo: '/agendamentos', pathMatch: 'full' },
      { path: 'agendamentos', component: AgendamentosComponent },
      { path: 'clientes', component: ClientesComponent },
    ]),
  ],
  providers: [AgendamentoService, ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
