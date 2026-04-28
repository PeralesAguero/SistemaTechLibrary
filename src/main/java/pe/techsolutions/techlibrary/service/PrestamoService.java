package pe.techsolutions.techlibrary.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.techsolutions.techlibrary.model.*;
import pe.techsolutions.techlibrary.repository.*;

import java.time.LocalDate;

@Service
public class PrestamoService {

    @Autowired
    private PrestamoRepository prestamoRepository;

    @Autowired
    private LibroRepository libroRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Prestamo prestar(Long usuarioId, Long libroId) {

        Usuario usuario = usuarioRepository.findById(usuarioId).orElse(null);
        Libro libro = libroRepository.findById(libroId).orElse(null);

        if (usuario == null || libro == null) {
            throw new RuntimeException("Usuario o libro no encontrado");
        }

        if (libro.getCantidadDisponible() <= 0) {
            throw new RuntimeException("No hay libros disponibles");
        }

        // RESTAR STOCK
        libro.setCantidadDisponible(libro.getCantidadDisponible() - 1);
        libroRepository.save(libro);

        Prestamo prestamo = new Prestamo();
        prestamo.setUsuario(usuario);
        prestamo.setLibro(libro);
        prestamo.setFechaPrestamo(LocalDate.now());
        prestamo.setFechaDevolucion(LocalDate.now().plusDays(7));

        return prestamoRepository.save(prestamo);
    }
}