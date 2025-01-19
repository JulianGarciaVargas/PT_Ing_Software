package com.example.back_PT.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
public class Pais {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Getter
    private String nombre;

    @OneToMany(mappedBy = "pais", fetch = FetchType.EAGER)
    private List<Usuario> usuarios;

    @OneToMany(mappedBy = "pais", fetch = FetchType.EAGER)
    private List<Gestora> gestoras;

    @Getter
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "pais_moneda",
            joinColumns = @JoinColumn(name = "pais_id"),
            inverseJoinColumns = @JoinColumn(name = "moneda_id")
    )
    private List<Moneda> monedas;
}