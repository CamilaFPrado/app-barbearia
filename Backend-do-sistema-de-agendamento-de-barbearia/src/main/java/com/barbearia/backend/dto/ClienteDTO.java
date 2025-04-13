package com.barbearia.backend.dto;

import lombok.Data;

@Data
public class ClienteDTO {

    private Long id; // Opcional: usado em atualizações
    private String nome;
    private String telefone;
    private String email;
}
