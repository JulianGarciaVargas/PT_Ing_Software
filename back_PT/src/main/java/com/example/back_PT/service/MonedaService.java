package com.example.back_PT.service;

import com.example.back_PT.entity.Moneda;
import com.example.back_PT.repository.MonedaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonedaService {
    @Autowired
    private MonedaRepository monedaRepository;

    public List<Moneda> findAll() {
        return monedaRepository.findAll();
    }

    public Moneda findById(Long id) {
        return monedaRepository.findById(id).orElse(null);
    }

    public Moneda save(Moneda moneda) {
        return monedaRepository.save(moneda);
    }

    public void deleteById(Long id) {
        monedaRepository.deleteById(id);
    }
}