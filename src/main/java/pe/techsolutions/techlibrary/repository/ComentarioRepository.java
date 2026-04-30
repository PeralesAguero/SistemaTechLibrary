public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    List<Comentario> findByLibroId(Long libroId);
}