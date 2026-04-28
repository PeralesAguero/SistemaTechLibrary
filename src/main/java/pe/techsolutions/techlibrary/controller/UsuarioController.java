package pe.techsolutions.techlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.techsolutions.techlibrary.model.Usuario;
import pe.techsolutions.techlibrary.repository.UsuarioRepository;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // ✔ GET - listar usuarios
    @GetMapping
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    // ✔ POST - crear usuario
    @PostMapping
    public Usuario guardar(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}