package com.example.demo.controller;

import com.example.demo.model.Inscricoes;
import com.example.demo.service.InscricoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/inscricoes")

public class InscricoesController {
    @Autowired
    private InscricoesService service;
 
    @GetMapping
    public List<Inscricoes> getAll() {
        return service.findAll();
    } 
    @PostMapping
    public Inscricoes create(@RequestBody Inscricoes inscricao) { 
        return service.save(inscricao);
    }

    @GetMapping("/{id}")
    public Inscricoes getInscricaoById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public Inscricoes updateInscricao(@PathVariable Long id, @RequestBody Inscricoes inscricaoDetails) {
        Inscricoes inscricao = service.findById(id);

        inscricao.setNome(inscricaoDetails.getNome());
        inscricao.setData(inscricaoDetails.getData());
        inscricao.setCasa(inscricaoDetails.getCasa());
        inscricao.setEspecializacao(inscricaoDetails.getEspecializacao());
        inscricao.setCPF(inscricaoDetails.getCPF());
        inscricao.setEmail(inscricaoDetails.getEmail());
        inscricao.setTelefone(inscricaoDetails.getTelefone());

        return service.save(inscricao);
    }

    @DeleteMapping("/{id}")
    public void deleteInscricao(@PathVariable Long id) { 
        service.delete(id);
    }
}
