package pe.techsolutions.techlibrary.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.techsolutions.techlibrary.model.Libro;
import pe.techsolutions.techlibrary.repository.LibroRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LibroService {

    @Autowired
    private LibroRepository libroRepository;

    // LISTAR
    public List<Libro> listar() {
        return libroRepository.findAll();
    }

    // BUSCAR POR ID
    public Optional<Libro> buscarPorId(Long id) {
        return libroRepository.findById(id);
    }

    // GUARDAR
    public Libro guardar(Libro libro) {
        return libroRepository.save(libro);
    }

    // ELIMINAR
    public void eliminar(Long id) {
        libroRepository.deleteById(id);
    }
}