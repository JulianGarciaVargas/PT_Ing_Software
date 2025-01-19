package com.example.back_PT.repository;

import com.example.back_PT.entity.Moneda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonedaRepository extends JpaRepository<Moneda, Long> {
}