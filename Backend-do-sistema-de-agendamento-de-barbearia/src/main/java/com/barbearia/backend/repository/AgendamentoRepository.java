package com.barbearia.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.barbearia.backend.model.Agendamento;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    // Métodos adicionais para consultas personalizadas podem ser adicionados aqui,
    // se necessário.
    // Por exemplo:
    // List<Agendamento> findByCliente(Cliente cliente);
    // List<Agendamento> findByDataHoraBetween(LocalDateTime start, LocalDateTime
    // end);
}