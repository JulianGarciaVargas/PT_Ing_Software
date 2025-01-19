package com.example.back_PT.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class PaisDTO {
    private Long id;
    private String nombre;
    private List<GestoraDTO> gestoras;
    private List<MonedaDTO> monedas;
}