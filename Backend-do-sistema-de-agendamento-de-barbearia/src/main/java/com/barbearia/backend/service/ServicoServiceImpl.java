package com.barbearia.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.barbearia.backend.model.Servico;
import com.barbearia.backend.repository.ServicoRepository;

@Service
public class ServicoServiceImpl implements ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    @Override
    public List<Servico> findAll() {
        return servicoRepository.findAll();
    }

    @Override
    public Optional<Servico> findById(Long id) {
        return servicoRepository.findById(id);
    }

    @Override
    public Servico save(Servico servico) {
        return servicoRepository.save(servico);
    }

    @Override
    public void deleteById(Long id) {
        servicoRepository.deleteById(id);
    }
}