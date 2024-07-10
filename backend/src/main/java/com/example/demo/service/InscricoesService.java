package com.example.demo.service;

import com.example.demo.model.Inscricoes;
import com.example.demo.repository.InscricoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InscricoesService {
    @Autowired
    private InscricoesRepository repository;

    public List<Inscricoes> findAll() {
        return repository.findAll();
    }

    public Inscricoes save(Inscricoes inscricao) {
        return repository.save(inscricao);
    }

    public Inscricoes findById(Long id) {
        Optional<Inscricoes> optionalInscricao = repository.findById(id);
        if (optionalInscricao.isPresent()) {
            return optionalInscricao.get();
        } else {
            throw new RuntimeException("Inscrição não encontrada com id " + id);
        }
    }
 

    public Inscricoes update(Long id, Inscricoes inscricaoDetails) {
        Optional<Inscricoes> optionalInscricao = repository.findById(id);
        if (optionalInscricao.isPresent()) {
            Inscricoes inscricao = optionalInscricao.get();
            inscricao.setNome(inscricaoDetails.getNome());
            inscricao.setData(inscricaoDetails.getData());
            inscricao.setCasa(inscricaoDetails.getCasa());
            inscricao.setEspecializacao(inscricaoDetails.getEspecializacao());
            inscricao.setCPF(inscricaoDetails.getCPF());
            inscricao.setEmail(inscricaoDetails.getEmail());
            inscricao.setTelefone(inscricaoDetails.getTelefone());
            return repository.save(inscricao);
        } else {
            throw new RuntimeException("Inscrição não encontrada com id " + id);
        }
    }

    public void delete(Long id) {
        Optional<Inscricoes> optionalInscricao = repository.findById(id);
        if (optionalInscricao.isPresent()) {
            repository.delete(optionalInscricao.get());
        } else {
            throw new RuntimeException("Inscrição não encontrada com id " + id);
        }
    }
}
