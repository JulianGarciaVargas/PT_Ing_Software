// src/main/java/com/example/back_PT/controller/MonedaController.java
package com.example.back_PT.controller;

import com.example.back_PT.entity.Moneda;
import com.example.back_PT.service.MonedaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/moneda")
public class MonedaController {
    @Autowired
    private MonedaService monedaService;

    @GetMapping
    public List<Moneda> getAllMonedas() {
        return monedaService.findAll();
    }

    @GetMapping("/{id}")
    public Moneda getMonedaById(@PathVariable Long id) {
        return monedaService.findById(id);
    }

    @PostMapping
    public Moneda createMoneda(@RequestBody Moneda moneda) {
        return monedaService.save(moneda);
    }

    @PutMapping("/{id}")
    public Moneda updateMoneda(@PathVariable Long id, @RequestBody Moneda moneda) {
        moneda.setId(id);
        return monedaService.save(moneda);
    }

    @DeleteMapping("/{id}")
    public void deleteMoneda(@PathVariable Long id) {
        monedaService.deleteById(id);
    }
}