import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/app/models/Agendamento.model'; // Modelo de Agendamento

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = `http://localhost:8080/api/agendamentos`; // URL para o backend

  constructor(private http: HttpClient) {}

  // Recuperar todos os agendamentos
  getAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  // Recuperar um agendamento específico
  getAgendamento(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.apiUrl}/${id}`);
  }

  // Adicionar um novo agendamento
  createAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  // Atualizar um agendamento existente
  updateAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(
      `${this.apiUrl}/${agendamento.id}`,
      agendamento
    );
  }

  // Excluir um agendamento
  deleteAgendamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
