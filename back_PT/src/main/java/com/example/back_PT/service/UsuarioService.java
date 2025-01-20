package com.example.back_PT.service;

import com.example.back_PT.entity.Usuario;
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
        return usuarioRepository.save(usuario);
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }

    public void assignCoinToUser(Long userId, Moneda moneda) {
        Usuario usuario = findById(userId);
        if (usuario != null) {
            if (usuario.getMonedas().contains(moneda)) {
                throw new IllegalArgumentException("El usuario ya tiene esta moneda.");
            }
            usuario.getMonedas().add(moneda);
            usuarioRepository.save(usuario);
        } else {
            throw new IllegalArgumentException("Usuario no encontrado.");
        }
    }
}