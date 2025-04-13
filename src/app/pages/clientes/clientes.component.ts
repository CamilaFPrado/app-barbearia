import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente.model'; // Modelo de Cliente
import { ClienteService } from 'src/app/services/cliente.service'; // Serviço de Cliente

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteForm: FormGroup;
  selectedCliente: Cliente | null = null;
  loading: boolean = false;
  noClientes: boolean = false;

  constructor(private clienteService: ClienteService, private fb: FormBuilder) {
    // Criando o formulário com validações
    this.clienteForm = this.fb.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
    });
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  // Carregar clientes do serviço
  loadClientes(): void {
    this.loading = true;
    this.clienteService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
        this.noClientes = clientes.length === 0;
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
        this.loading = false;
      }
    );
  }

  // Adicionar ou editar um cliente
  saveCliente(): void {
    if (this.clienteForm.invalid) {
      return;
    }

    this.loading = true;
    const clienteData = this.clienteForm.value;

    if (clienteData.id) {
      // Se já existe um cliente selecionado, fazer atualização
      this.clienteService.updateCliente(clienteData).subscribe(
        () => {
          this.loadClientes(); // Recarregar a lista após a atualização
          this.resetForm();
        },
        (error) => {
          console.error('Erro ao atualizar cliente:', error);
          this.loading = false;
        }
      );
    } else {
      // Caso contrário, é um novo cliente
      this.clienteService.addCliente(clienteData).subscribe(
        () => {
          this.loadClientes(); // Recarregar a lista após a adição
          this.resetForm();
        },
        (error) => {
          console.error('Erro ao adicionar cliente:', error);
          this.loading = false;
        }
      );
    }
  }

  // Editar cliente
  editCliente(cliente: Cliente): void {
    this.selectedCliente = cliente;
    this.clienteForm.patchValue(cliente); // Preencher o formulário com os dados do cliente
  }

  // Excluir cliente
  deleteCliente(clienteId: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.loading = true;
      this.clienteService.deleteCliente(clienteId).subscribe(
        () => {
          this.loadClientes(); // Recarregar a lista após a exclusão
        },
        (error) => {
          console.error('Erro ao excluir cliente:', error);
          this.loading = false;
        }
      );
    }
  }

  // Resetar o formulário
  resetForm(): void {
    this.clienteForm.reset();
    this.selectedCliente = null;
  }

  // Verifica se o formulário está válido
  get formControls() {
    return this.clienteForm.controls;
  }
}
