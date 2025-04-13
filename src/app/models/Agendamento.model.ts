export interface Agendamento {
  id?: number; // Opcional, usado para edições
  nomeCliente: string; // Nome do cliente
  data: string; // Data do agendamento (em formato ISO ou string)
  hora: string; // Hora do agendamento
  descricao?: string; // Descrição opcional
}
