package pe.techsolutions.techlibrary.repository;

import pe.techsolutions.techlibrary.model.Prestamo;
import pe.techsolutions.techlibrary.model.Usuario;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class PrestamoRepositoryTest {

    @Autowired
    private PrestamoRepository prestamoRepository;

    @Test
    @DisplayName("Guardar y buscar préstamos por usuario")
    void testFindByUsuarioId() {

        Usuario usuario = new Usuario();
        usuario.setId(1L);

        Prestamo prestamo = new Prestamo();
        prestamo.setUsuario(usuario);

        prestamoRepository.save(prestamo);
        
        List<Prestamo> resultados = prestamoRepository.findByUsuarioId(1L);

        assertThat(resultados).isNotEmpty();
        assertThat(resultados.size()).isEqualTo(1);
    }

    @Test
void testGuardarPrestamo() {
    Prestamo prestamo = new Prestamo();
    Prestamo guardado = prestamoRepository.save(prestamo);

    assertThat(guardado.getId()).isNotNull();
}

    @Test
void testEliminarPrestamo() {
    Prestamo prestamo = new Prestamo();
    Prestamo guardado = prestamoRepository.save(prestamo);

    prestamoRepository.deleteById(guardado.getId());

    assertThat(prestamoRepository.findById(guardado.getId())).isEmpty();
}


}