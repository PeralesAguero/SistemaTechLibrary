package pe.techsolutions.techlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.techsolutions.techlibrary.model.Prestamo;

import java.util.List;

public interface PrestamoRepository extends JpaRepository <Prestamo, Long> {
    List<Prestamo> findByUsuarioId(Long usuarioId);
}
