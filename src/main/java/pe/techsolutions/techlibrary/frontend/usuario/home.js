// ================= DATOS =================
let libros = [];
let categoriaActual = "Todos";
let libroActualIndex = null;

// ================= INICIAL =================
document.addEventListener("DOMContentLoaded", () => {
    cargarLibrosDesdeAPI();
});

// ================= LIBROS =================
function cargarLibrosDesdeAPI() {
    fetch("http://localhost:8080/api/libros")
        .then(res => res.json())
        .then(data => {
            libros = data;
            renderLibros(libros);
        })
        .catch(error => console.error("Error cargando libros:", error));
}

function renderLibros(lista) {
    let contenedor = document.getElementById("contenedorLibros");
    contenedor.innerHTML = "";

    lista.forEach((libro, index) => {
        contenedor.innerHTML += `
        <div class="card">
            <img src="${libro.imagen}">
            <div class="card-content">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                <button onclick="verDetalle(${index})">Ver</button>
            </div>
        </div>`;
    });
}

// ================= BUSCAR =================
function buscarLibro() {
    let texto = document.getElementById("busqueda").value.toLowerCase();

    let filtrados = libros.filter(l =>
        l.titulo.toLowerCase().includes(texto) &&
        (categoriaActual === "Todos" || l.categoria === categoriaActual)
    );

    renderLibros(filtrados);
}

// ================= FILTRO =================
function filtrarCategoria(cat) {
    categoriaActual = cat;
    buscarLibro();
}

// ================= DETALLE =================
function verDetalle(index) {
    let libro = libros[index];
    libroActualIndex = index;

    document.getElementById("dImagen").src = libro.imagen;
    document.getElementById("dTitulo").textContent = libro.titulo;
    document.getElementById("dAutor").textContent = "Autor: " + libro.autor;
    document.getElementById("dCategoria").textContent = "Categoría: " + libro.categoria;
    document.getElementById("dDescripcion").textContent = libro.descripcion;

    let btn = document.getElementById("btnAccion");

    btn.textContent = "Reservar";
    btn.style.display = "inline-block";
    btn.onclick = () => reservarLibro(index);

    cargarComentarios(libro.id);

    document.querySelector(".libros").style.display = "none";
    document.getElementById("detalleLibro").classList.remove("oculto");
}

// ================= RESERVA =================
function reservarLibro(index) {
    let libro = libros[index];

    fetch(`http://localhost:8080/api/prestamos?usuarioId=1&libroId=${libro.id}`, {
        method: "POST"
    })
    .then(res => res.json())
    .then(() => {
        mostrarToast("Reserva realizada", "success");
    })
    .catch(() => {
        mostrarToast("Error al reservar", "error");
    });
}

// ================= MIS RESERVAS (REAL BD) =================
function irMisPrestamos() {
    document.querySelector(".libros").style.display = "none";
    document.getElementById("detalleLibro").classList.add("oculto");
    document.getElementById("misPrestamos").classList.remove("oculto");

    cargarMisReservas();
}

function cargarMisReservas() {
    fetch("http://localhost:8080/api/prestamos/usuario/1")
        .then(res => res.json())
        .then(data => {
            renderMisReservas(data);
        })
        .catch(err => console.error(err));
}

function renderMisReservas(reservas) {
    let tabla = document.getElementById("tablaMisPrestamos");
    tabla.innerHTML = "";

    if (!reservas || reservas.length === 0) {
        tabla.innerHTML = `<tr><td colspan="3">No tienes reservas</td></tr>`;
        return;
    }

    reservas.forEach(r => {
        tabla.innerHTML += `
        <tr>
            <td>${r.libroId}</td>
            <td>${r.fecha || "Sin fecha"}</td>
            <td>
                <button onclick="cancelarReserva(${r.id})">Cancelar</button>
            </td>
        </tr>`;
    });
}

function cancelarReserva(id) {
    fetch(`http://localhost:8080/api/prestamos/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        cargarMisReservas();
        mostrarToast("Reserva cancelada", "success");
    })
    .catch(() => {
        mostrarToast("Error al cancelar", "error");
    });
}

// ================= COMENTARIOS =================
function agregarComentario() {
    let input = document.getElementById("inputComentario");
    let texto = input.value.trim();

    if (texto === "") return mostrarToast("Escribe un comentario", "warning");

    let libro = libros[libroActualIndex];

    fetch("http://localhost:8080/comentarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            texto: texto,
            libroId: libro.id,
            usuarioId: 1
        })
    })
    .then(res => res.json())
    .then(() => {
        input.value = "";
        cargarComentarios(libro.id);
        mostrarToast("Comentario agregado", "success");
    })
    .catch(() => {
        mostrarToast("Error al comentar", "error");
    });
}

function cargarComentarios(libroId) {
    fetch(`http://localhost:8080/comentarios/libro/${libroId}`)
        .then(res => res.json())
        .then(data => {
            libros[libroActualIndex].comentarios = data;
            renderComentarios();
        })
        .catch(err => console.error(err));
}

function renderComentarios() {
    let contenedor = document.getElementById("listaComentarios");
    contenedor.innerHTML = "";

    let comentarios = libros[libroActualIndex].comentarios || [];

    if (comentarios.length === 0) {
        contenedor.innerHTML = "<p>No hay comentarios aún</p>";
        return;
    }

    comentarios.forEach(c => {
        contenedor.innerHTML += `<div class="comentario">${c.texto}</div>`;
    });
}

// ================= NAVEGACIÓN =================
function volver() {
    document.querySelector(".libros").style.display = "block";
    document.getElementById("detalleLibro").classList.add("oculto");
}

function volverInicio() {
    document.querySelector(".libros").style.display = "block";
    document.getElementById("misPrestamos").classList.add("oculto");
    document.getElementById("detalleLibro").classList.add("oculto");
}

// ================= TOAST =================
function mostrarToast(msg, tipo = "success") {
    let t = document.createElement("div");
    t.className = `toast ${tipo}`;
    t.textContent = msg;

    document.getElementById("toastContainer").appendChild(t);

    setTimeout(() => t.classList.add("show"), 100);
    setTimeout(() => t.remove(), 3000);
}