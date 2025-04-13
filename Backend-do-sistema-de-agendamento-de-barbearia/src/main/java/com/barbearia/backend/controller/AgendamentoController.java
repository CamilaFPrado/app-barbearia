package com.barbearia.backend.controller;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barbearia.backend.dto.AgendamentoDTO;
import com.barbearia.backend.model.Agendamento;
import com.barbearia.backend.model.Cliente;
import com.barbearia.backend.model.Servico;
import com.barbearia.backend.repository.AgendamentoRepository;
import com.barbearia.backend.repository.ClienteRepository;
import com.barbearia.backend.repository.ServicoRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/agendamentos")
@RequiredArgsConstructor
public class AgendamentoController {

    private final AgendamentoRepository agendamentoRepository;
    private final ClienteRepository clienteRepository;
    private final ServicoRepository servicoRepository;

    @PostMapping
    public ResponseEntity<?> criarAgendamento(@RequestBody AgendamentoDTO dto) {
        Cliente cliente = clienteRepository.findById(dto.getClienteId())
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Servico servico = servicoRepository.findById(dto.getServicoId())
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));

        LocalDateTime dataHora = LocalDateTime.parse(dto.getDataHora(), null);

        Agendamento agendamento = new Agendamento();
        agendamento.setCliente(cliente);
        agendamento.setServico(servico);
        agendamento.setDataHora(dataHora);
        agendamento.setObservacoes(dto.getObservacoes());

        Agendamento salvo = agendamentoRepository.save(agendamento);
        return ResponseEntity.ok(salvo);
    }
}
