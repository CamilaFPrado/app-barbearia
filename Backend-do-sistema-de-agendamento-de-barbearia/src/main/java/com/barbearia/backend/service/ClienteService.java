package com.barbearia.backend.service;

import java.util.List;
import java.util.Optional;

import com.barbearia.backend.model.Cliente;

public interface ClienteService {
    List<Cliente> findAll();

    Optional<Cliente> findById(Long id);

    Cliente save(Cliente cliente);

    void deleteById(Long id);
}