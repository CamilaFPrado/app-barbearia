package com.barbearia.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.barbearia.backend.model.Servico;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {
    // Métodos adicionais para consultas personalizadas podem ser adicionados aqui,
    // se necessário.
}