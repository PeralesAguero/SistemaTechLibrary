package pe.techsolutions.techlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.techsolutions.techlibrary.model.Libro;
import pe.techsolutions.techlibrary.service.LibroService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "*")
public class LibroController {

    @Autowired
    private LibroService libroService;

    // GET - LISTAR TODOS
    @GetMapping
    public List<Libro> listar() {
        return libroService.listar();
    }

    // GET - BUSCAR POR ID
    @GetMapping("/{id}")
    public Optional<Libro> obtener(@PathVariable Long id) {
        return libroService.buscarPorId(id);
    }

    // POST - CREAR
    @PostMapping
    public Libro crear(@RequestBody Libro libro) {
        return libroService.guardar(libro);
    }

    // PUT - ACTUALIZAR
    @PutMapping("/{id}")
    public Libro actualizar(@PathVariable Long id, @RequestBody Libro libro) {
        libro.setId(id);
        return libroService.guardar(libro);
    }

    // DELETE - ELIMINAR
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        libroService.eliminar(id);
    }
}