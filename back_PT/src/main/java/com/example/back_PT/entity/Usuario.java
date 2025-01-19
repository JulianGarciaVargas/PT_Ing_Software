package com.example.back_PT.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
public class Usuario {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Getter
    private String nombre;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pais_id")
    private Pais pais;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "usuario_moneda",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "moneda_id")
    )
    private List<Moneda> monedas;

    public Pais getPais() {
        return pais;
    }

    public List<Moneda> getMonedas() {
        return monedas;
    }
}