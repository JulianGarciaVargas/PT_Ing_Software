package com.example.back_PT.service;

import com.example.back_PT.entity.Usuario;
import com.example.back_PT.entity.Pais;
import com.example.back_PT.entity.Moneda;
import com.example.back_PT.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Usuario findById(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario save(Usuario usuario) {
        Pais pais = usuario.getPais();
        List<Moneda> monedasPermitidas = pais.getMonedas();
        for (Moneda moneda : usuario.getMonedas()) {
            if (!monedasPermitidas.contains(moneda)) {
                throw new IllegalArgumentException("Moneda " + moneda.getNombre() + " no permitida en el país " + pais.getNombre());
            }
        }
        return usuarioRepository.save(usuario);
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }
}