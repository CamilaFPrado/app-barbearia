package com.barbearia.backend.dto;

public class AgendamentoDTO {
    private Long clienteId;
    private Long servicoId;
    private String dataHora; // Formato ISO 8601 (ex: "2025-04-14T14:30")
    private String observacoes;

    public Long getClienteId() {
        throw new UnsupportedOperationException("Unimplemented method 'getClienteId'");
    }

    public Long getServicoId() {
        throw new UnsupportedOperationException("Unimplemented method 'getServicoId'");
    }

    public CharSequence getDataHora() {
        throw new UnsupportedOperationException("Unimplemented method 'getDataHora'");
    }

    public String getObservacoes() {
        throw new UnsupportedOperationException("Unimplemented method 'getObservacoes'");
    }
}
