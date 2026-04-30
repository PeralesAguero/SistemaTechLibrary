import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class PrestamoRepositoryTest {

    @Autowired
    private PrestamoRepository prestamoRepository;

    @Autowired
    private EntityManager entityManager;

    @Test
    @DisplayName("Debe guardar y buscar préstamos por usuarioId")
    void testFindByUsuarioId() {

        // 🔹 Crear usuario
        Usuario usuario = new Usuario();
        usuario.setNombre("Renzo");
        usuario.setEmail("renzo@test.com");
        usuario.setPassword("123456");
        usuario.setRol("Usuario");
        entityManager.persist(usuario);

        // 🔹 Crear libro
        Libro libro = new Libro();
        libro.setTitulo("Clean Code"); // usa tus campos reales
        entityManager.persist(libro);

        // 🔹 Crear préstamo
        Prestamo prestamo = new Prestamo();
        prestamo.setUsuario(usuario);
        prestamo.setLibro(libro);
        prestamo.setFechaPrestamo(LocalDate.now());
        prestamo.setFechaDevolucion(LocalDate.now().plusDays(7));

        entityManager.persist(prestamo);
        entityManager.flush();

        // 🔹 Ejecutar método
        List<Prestamo> resultados = prestamoRepository.findByUsuarioId(usuario.getId());

        // 🔹 Validaciones
        assertThat(resultados).isNotEmpty();
        assertThat(resultados.size()).isEqualTo(1);
        assertThat(resultados.get(0).getUsuario().getId()).isEqualTo(usuario.getId());
    }
}