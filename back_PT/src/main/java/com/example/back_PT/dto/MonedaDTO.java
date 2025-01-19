package com.example.back_PT.dto;

import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Getter
@Setter
public class MonedaDTO {
    private Long id;
    private String nombre;
    private String simbolo;
    private BigDecimal valorEnDolares;
}