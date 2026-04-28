package pe.techsolutions.techlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.techsolutions.techlibrary.model.Prestamo;
import pe.techsolutions.techlibrary.service.PrestamoService;

@RestController
@RequestMapping("/api/prestamos")
public class PrestamoController {

    @Autowired
    private PrestamoService prestamoService;

    @PostMapping
    public Prestamo prestar(@RequestParam Long usuarioId,
                            @RequestParam Long libroId) {
        return prestamoService.prestar(usuarioId, libroId);
    }
}