package com.barbearia.backend.service;

import java.util.List;
import java.util.Optional;

import com.barbearia.backend.model.Servico;

public interface ServicoService {
    List<Servico> findAll();

    Optional<Servico> findById(Long id);

    Servico save(Servico servico);

    void deleteById(Long id);
}