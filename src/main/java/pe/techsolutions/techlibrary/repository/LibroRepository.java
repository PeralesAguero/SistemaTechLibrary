package pe.techsolutions.techlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.techsolutions.techlibrary.model.Libro;

public interface LibroRepository extends JpaRepository<Libro, Long> {
}