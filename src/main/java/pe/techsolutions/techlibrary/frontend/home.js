// ================= DATOS =================
let libros = [
    {
        titulo: "El Quijote",
        autor: "Cervantes",
        categoria: "Novela",
        descripcion: "Una obra clásica de la literatura española",
        disponible: true
    },
    {
        titulo: "JavaScript Pro",
        autor: "Juan Perez",
        categoria: "Tecnología",
        descripcion: "Aprende JS avanzado",
        disponible: false
    },
    {
        titulo: "Historia del Perú",
        autor: "Maria Lopez",
        categoria: "Historia",
        descripcion: "Historia completa del Perú",
        disponible: true
    }
];

let categoriaActual = "Todos";
let misReservas = [];

// ================= TOAST =================
function mostrarToast(mensaje, tipo = "success") {
    let container = document.getElementById("toastContainer");

    let toast = document.createElement("div");
    toast.className = `toast ${tipo}`;
    toast.textContent = mensaje;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ================= RENDER =================
function renderLibros(lista) {
    let contenedor = document.getElementById("contenedorLibros");
    contenedor.innerHTML = "";

    lista.forEach((libro, index) => {
        contenedor.innerHTML += `
        <div class="card">
            <h3>${libro.titulo}</h3>
            <p>${libro.autor}</p>
            <small>${libro.categoria}</small>
            <br>
            <button onclick="verDetalle(${index})">Ver</button>
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

// ================= FECHAS =================
function obtenerFechaActual() {
    return new Date().toLocaleDateString();
}

// ================= RESERVAR =================
function reservarLibro(index) {
    let libro = libros[index];

    // evitar duplicados
    let existe = misReservas.some(r => r.titulo === libro.titulo);
    if (existe) return mostrarToast("Ya reservaste este libro", "warning");

    misReservas.push({
        titulo: libro.titulo,
        fechaReserva: obtenerFechaActual()
    });

    mostrarToast("Reserva realizada", "success");

    volver();
}

// ================= RENDER RESERVAS =================
function renderMisReservas() {
    let tabla = document.getElementById("tablaMisPrestamos");
    tabla.innerHTML = "";

    if (misReservas.length === 0) {
        tabla.innerHTML = `<tr><td colspan="3">No tienes reservas</td></tr>`;
        return;
    }

    misReservas.forEach((r, index) => {
        tabla.innerHTML += `
        <tr>
            <td>${r.titulo}</td>
            <td>${r.fechaReserva}</td>
            <td>
                <button onclick="cancelarReserva(${index})">Cancelar</button>
            </td>
        </tr>`;
    });
}

// ================= CANCELAR =================
function cancelarReserva(index) {
    misReservas.splice(index, 1);
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

// ================= INICIAL =================
renderLibros(libros);