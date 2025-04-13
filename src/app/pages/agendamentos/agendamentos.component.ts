import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agendamento } from 'src/app/models/Agendamento.model'; // Modelo do agendamento
import { AgendamentoService } from 'src/app/services/agendamento.service'; // Serviço que interage com a API ou banco de dados

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss'],
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', []),
    ]),
  ],
})
export class AgendamentosComponent implements OnInit {
  agendamentos: Agendamento[] = []; // Lista de agendamentos
  agendamentoForm: FormGroup; // Formulário de agendamento
  selectedAgendamento: Agendamento | null = null; // Agendamento selecionado para edição
  isLoading: boolean = false; // Estado de carregamento

  constructor(
    private agendamentoService: AgendamentoService,
    private fb: FormBuilder
  ) {
    // Inicializando o formulário com as validações
    this.agendamentoForm = this.fb.group({
      id: [null],
      nomeCliente: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      descricao: [''],
    });
  }

  ngOnInit(): void {
    this.loadAgendamentos(); // Carrega os agendamentos ao inicializar o componente
  }

  // Método para carregar os agendamentos
  loadAgendamentos(): void {
    this.isLoading = true;
    this.agendamentoService.getAgendamentos().subscribe(
      (data: Agendamento[]) => {
        this.agendamentos = data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Erro ao carregar agendamentos', error);
        this.isLoading = false;
      }
    );
  }

  // Método para salvar ou atualizar um agendamento
  saveAgendamento(): void {
    if (this.agendamentoForm.invalid) {
      return;
    }

    this.isLoading = true;
    const agendamentoData = this.agendamentoForm.value;

    if (agendamentoData.id) {
      // Se já tiver id, é um agendamento existente, então atualiza
      this.agendamentoService.updateAgendamento(agendamentoData).subscribe(
        (data: any) => {
          this.loadAgendamentos(); // Recarrega os agendamentos após a atualização
          this.resetForm();
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Erro ao atualizar agendamento', error);
          this.isLoading = false;
        }
      );
    } else {
      // Se não tiver id, é um novo agendamento, então cria
      this.agendamentoService.createAgendamento(agendamentoData).subscribe(
        (data: any) => {
          this.loadAgendamentos(); // Recarrega os agendamentos após a criação
          this.resetForm();
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Erro ao criar agendamento', error);
          this.isLoading = false;
        }
      );
    }
  }
  resetForm(): void {
    this.agendamentoForm.reset();
    this.selectedAgendamento = null;
  }

  // Método para editar um agendamento
  editAgendamento(agendamento: Agendamento): void {
    this.selectedAgendamento = agendamento;
    this.agendamentoForm.patchValue(agendamento); // Preenche o formulário com os dados do agendamento
  }

  // Método para excluir um agendamento
  deleteAgendamento(id: number): void {
    this.isLoading = true;
    this.agendamentoService.deleteAgendamento(id).subscribe(
      () => {
        this.loadAgendamentos(); // Recarrega os agendamentos após a exclusão
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Erro ao excluir agendamento', error);
        this.isLoading = false;
      }
    );
  }
}
