package pe.techsolutions.techlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.techsolutions.techlibrary.model.Prestamo;

public interface PrestamoRepository extends JpaRepository<Prestamo, Long> {
}