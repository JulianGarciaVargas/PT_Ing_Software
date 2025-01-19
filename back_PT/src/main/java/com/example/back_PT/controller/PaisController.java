package com.example.back_PT.controller;

import com.example.back_PT.entity.Gestora;
import com.example.back_PT.entity.Moneda;
import com.example.back_PT.entity.Pais;
import com.example.back_PT.service.PaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pais")
public class PaisController {
    @Autowired
    private PaisService paisService;

    @GetMapping
    public List<Pais> getAllPaises() {
        return paisService.findAll();
    }

    @GetMapping("/{id}")
    public Pais getPaisById(@PathVariable Long id) {
        return paisService.findById(id);
    }

    @GetMapping("/{id}/monedas")
    public List<Moneda> getMonedasByPais(@PathVariable Long id) {
        return paisService.findMonedasByPaisId(id);
    }

    @GetMapping("/{id}/gestoras")
    public List<Gestora> getGestorasByPais(@PathVariable Long id) {
        return paisService.findGestorasByPaisId(id);
    }

    @PostMapping
    public Pais createPais(@RequestBody Pais pais) {
        return paisService.save(pais);
    }

    @PutMapping("/{id}")
    public Pais updatePais(@PathVariable Long id, @RequestBody Pais pais) {
        pais.setId(id);
        return paisService.save(pais);
    }

    @DeleteMapping("/{id}")
    public void deletePais(@PathVariable Long id) {
        paisService.deleteById(id);
    }
}