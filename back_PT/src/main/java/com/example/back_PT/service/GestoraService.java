// src/main/java/com/example/back_PT/service/GestoraService.java
package com.example.back_PT.service;

import com.example.back_PT.entity.Gestora;
import com.example.back_PT.repository.GestoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GestoraService {
    @Autowired
    private GestoraRepository gestoraRepository;

    public List<Gestora> findAll() {
        return gestoraRepository.findAll();
    }

    public Gestora findById(Long id) {
        return gestoraRepository.findById(id).orElse(null);
    }

    public Gestora save(Gestora gestora) {
        return gestoraRepository.save(gestora);
    }

    public void deleteById(Long id) {
        gestoraRepository.deleteById(id);
    }
}