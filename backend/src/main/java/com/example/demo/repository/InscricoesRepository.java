package com.example.demo.repository;
  
import com.example.demo.model.Inscricoes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscricoesRepository extends JpaRepository<Inscricoes, Long> { 
}
