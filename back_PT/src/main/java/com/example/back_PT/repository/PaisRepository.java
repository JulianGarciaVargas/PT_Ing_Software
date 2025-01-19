package com.example.back_PT.repository;

import com.example.back_PT.entity.Pais;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaisRepository extends JpaRepository<Pais, Long> {

    @EntityGraph(attributePaths = {"gestoras", "monedas"})
    Optional<Pais> findById(Long id);
}