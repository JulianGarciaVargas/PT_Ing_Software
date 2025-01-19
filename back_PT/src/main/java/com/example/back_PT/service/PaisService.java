package com.example.back_PT.service;

import com.example.back_PT.entity.Moneda;
import com.example.back_PT.entity.Pais;
import com.example.back_PT.exception.ResourceNotFoundException;
import com.example.back_PT.repository.PaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaisService {
    @Autowired
    private PaisRepository paisRepository;

    public List<Pais> findAll() {
        return paisRepository.findAll();
    }

    public Pais findById(Long id) {
        return paisRepository.findById(id).orElse(null);
    }

    public List<Moneda> findMonedasByPaisId(Long id) {
        Pais pais = findById(id);
        if (pais != null) {
            return pais.getMonedas();
        } else {
            throw new ResourceNotFoundException("Pais not found with id " + id);
        }
    }

    public Pais save(Pais pais) {
        return paisRepository.save(pais);
    }

    public void deleteById(Long id) {
        paisRepository.deleteById(id);
    }
}