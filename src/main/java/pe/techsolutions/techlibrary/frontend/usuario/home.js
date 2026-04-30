// ================= DATOS =================
let libros = [
    {
        titulo: "El Quijote",
        autor: "Cervantes",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://picsum.photos/200/300?1"
    },
    {
        titulo: "JavaScript Pro",
        autor: "Juan Perez",
        categoria: "Tecnología",
        descripcion: "Aprende JS",
        imagen: "https://picsum.photos/200/300?2"
    },
    {
        titulo: "Historia del Perú",
        autor: "Maria Lopez",
        categoria: "Historia",
        descripcion: "Historia completa",
        imagen: "https://picsum.photos/200/300?3"
    }
];

let categoriaActual = "Todos";
let misReservas = [];

// ================= RENDER LIBROS =================
function renderLibros(lista) {
    let contenedor = document.getElementById("contenedorLibros");
    contenedor.innerHTML = "";

    lista.forEach((libro, index) => {
        contenedor.innerHTML += `
        <div class="card">
            <img src="${libro.imagen}" alt="libro">

            <div class="card-content">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                <button onclick="verDetalle(${index})">Ver</button>
            </div>
        </div>`;
    });
}

// ================= BUSCAR + FILTRAR =================
function buscarLibro() {
    let texto = document.getElementById("busqueda").value.toLowerCase();

    let filtrados = libros.filter(l =>
        l.titulo.toLowerCase().includes(texto) &&
        (categoriaActual === "Todos" || l.categoria === categoriaActual)
    );

    renderLibros(filtrados);
}

// ================= FILTRAR CATEGORÍA =================
function filtrarCategoria(cat) {
    categoriaActual = cat;

    // marcar botón activo (opcional)
    document.querySelectorAll(".categoria-lista button")
        .forEach(btn => btn.classList.remove("activo"));

    if (event && event.target) {
        event.target.classList.add("activo");
    }

    buscarLibro();
}

// ================= DETALLE =================
function verDetalle(index) {
    let libro = libros[index];

    document.getElementById("dImagen").src = libro.imagen;
    document.getElementById("dTitulo").textContent = libro.titulo;
    document.getElementById("dAutor").textContent = "Autor: " + libro.autor;
    document.getElementById("dCategoria").textContent = "Categoría: " + libro.categoria;
    document.getElementById("dDescripcion").textContent = libro.descripcion;

    let btn = document.getElementById("btnAccion");
    btn.textContent = "Reservar";
    btn.onclick = () => reservarLibro(index);

    document.querySelector(".libros").style.display = "none";
    document.getElementById("detalleLibro").classList.remove("oculto");
}

// ================= VOLVER =================
function volver() {
    document.querySelector(".libros").style.display = "block";
    document.getElementById("detalleLibro").classList.add("oculto");
}

// ================= RESERVAR =================
function reservarLibro(index) {
    let libro = libros[index];

    // evitar duplicados
    let existe = misReservas.some(r => r.titulo === libro.titulo);
    if (existe) return mostrarToast("Ya reservaste este libro", "warning");

    misReservas.push({
        titulo: libro.titulo,
        fecha: new Date().toLocaleDateString()
    });

    mostrarToast("Reserva realizada", "success");
    volver();
}

// ================= MIS RESERVAS =================
function renderMisReservas() {
    let tabla = document.getElementById("tablaMisPrestamos");
    tabla.innerHTML = "";

    if (misReservas.length === 0) {
        tabla.innerHTML = `<tr><td colspan="3">No tienes reservas</td></tr>`;
        return;
    }

    misReservas.forEach((r, i) => {
        tabla.innerHTML += `
        <tr>
            <td>${r.titulo}</td>
            <td>${r.fecha}</td>
            <td>
                <button onclick="cancelarReserva(${i})">Cancelar</button>
            </td>
        </tr>`;
    });
}

// ================= CANCELAR =================
function cancelarReserva(i) {
    misReservas.splice(i, 1);
    renderMisReservas();
    mostrarToast("Reserva cancelada", "success");
}

// ================= NAVEGACIÓN =================
function irMisPrestamos() {
    document.querySelector(".libros").style.display = "none";
    document.getElementById("detalleLibro").classList.add("oculto");
    document.getElementById("misPrestamos").classList.remove("oculto");

    renderMisReservas();
}

function volverInicio() {
    document.querySelector(".libros").style.display = "block";
    document.getElementById("misPrestamos").classList.add("oculto");
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

// ================= INICIAL =================
renderLibros(libros);