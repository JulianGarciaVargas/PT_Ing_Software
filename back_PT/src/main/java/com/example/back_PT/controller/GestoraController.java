package com.example.back_PT.controller;

import com.example.back_PT.entity.Gestora;
import com.example.back_PT.service.GestoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gestora")
public class GestoraController {
    @Autowired
    private GestoraService gestoraService;

    @GetMapping
    public List<Gestora> getAllGestoras() {
        return gestoraService.findAll();
    }

    @GetMapping("/{id}")
    public Gestora getGestoraById(@PathVariable Long id) {
        return gestoraService.findById(id);
    }

    @PostMapping
    public Gestora createGestora(@RequestBody Gestora gestora) {
        return gestoraService.save(gestora);
    }

    @PutMapping("/{id}")
    public Gestora updateGestora(@PathVariable Long id, @RequestBody Gestora gestora) {
        gestora.setId(id);
        return gestoraService.save(gestora);
    }

    @DeleteMapping("/{id}")
    public void deleteGestora(@PathVariable Long id) {
        gestoraService.deleteById(id);
    }
}