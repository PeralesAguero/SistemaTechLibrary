@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    @Autowired
    private ComentarioRepository repo;

    @PostMapping
    public Comentario guardar(@RequestBody Comentario c) {
        return repo.save(c);
    }

    @GetMapping("/libro/{id}")
    public List<Comentario> listarPorLibro(@PathVariable Long id) {
        return repo.findByLibroId(id);
    }
}