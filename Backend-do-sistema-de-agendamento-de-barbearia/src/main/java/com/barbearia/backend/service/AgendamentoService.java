package com.barbearia.backend.service;

import java.util.List;
import java.util.Optional;

import com.barbearia.backend.dto.AgendamentoDTO;
import com.barbearia.backend.model.Agendamento;

public interface AgendamentoService {
    List<Agendamento> findAll();

    Optional<Agendamento> findById(Long id);

    Agendamento save(Agendamento agendamento);

    Agendamento save(AgendamentoDTO dto); // <-- adicione este método

    void deleteById(Long id);
}
