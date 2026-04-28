package pe.techsolutions.techlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.techsolutions.techlibrary.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}