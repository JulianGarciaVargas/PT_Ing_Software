// src/main/java/com/example/back_PT/controller/AuthenticationResponse.java
package com.example.back_PT.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponse {
    private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
}