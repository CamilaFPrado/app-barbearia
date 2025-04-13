package com.barbearia.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.barbearia.backend.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    // Métodos adicionais para consultas personalizadas podem ser adicionados aqui,
    // se necessário.
    // Por exemplo:
    // Optional<Cliente> findByEmail(String email);
}