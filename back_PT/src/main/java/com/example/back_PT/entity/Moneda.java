package com.example.back_PT.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class Moneda {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Getter
    private String nombre;

    @Setter
    @Getter
    private String simbolo;

    @Setter
    @Getter
    private BigDecimal valorEnDolares;

    @ManyToMany(mappedBy = "monedas", fetch = FetchType.EAGER)
    private List<Pais> paises;

    @ManyToMany(mappedBy = "monedas", fetch = FetchType.EAGER)
    private List<Usuario> usuarios;

    @ManyToMany(mappedBy = "monedas", fetch = FetchType.EAGER)
    private List<Gestora> gestoras;
}