// ================= DATOS =================
let libros = [
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/a6/18/a618be10eae5c2a608ec6e22e6917e29.jpg",
        comentarios: []   
    },
    {
        titulo: "JavaScript Pro",
        autor: "Juan Perez",
        categoria: "Tecnología",
        descripcion: "Aprende JS",
        imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/ab/5a/ab5af628e5203f947d05e4d9d623572f.jpg",
        comentarios: []   
    },
    {
        titulo: "Historia del Perú",
        autor: "Maria Lopez",
        categoria: "Historia",
        descripcion: "Historia completa",
        imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/76/a1/76a1a3aa41ccdf9734c29babdaac2cf2.jpg",
        comentarios: []   
    },

    {
        titulo: "Los rios profundos",
        autor: "Jose Maria Arguedas",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://substackcdn.com/image/fetch/$s_!KJ2i!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F01693602-a85a-4852-b275-7e21274d1d7b_2000x3336.jpeg",
        comentarios: []
    },
    {
        titulo: "La camarada Jorge y el Dragon",
        autor: "Rafel Dumett",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://substackcdn.com/image/fetch/$s_!VSy8!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3ccc9aa1-ba6d-4c51-b95e-4dbe285a2c91_1100x1698.jpeg",
        comentarios: []
    },{
        titulo: "Francisca,Princesa del Peru",
        autor: "Alonso Cueto",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://substackcdn.com/image/fetch/$s_!LaZE!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F90382e59-f4c0-4832-bdbf-528c94c2d605_1100x1698.jpeg",
        comentarios: []
    },{
        titulo: "Polvora para gallinazos",
        autor: "Mirko Lauer",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://substackcdn.com/image/fetch/$s_!uhb5!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F07733fdc-4d61-4d8f-9b55-86b9147d0ce1_260x420.jpeg",
        comentarios: []   
    },{
        titulo: "Yo no quería escribir cuentos (solo quería conocerte) ",
        autor: "Pierre Castro",
        categoria: "Cuento",
        descripcion: "Cuento con un gran sentido del humor e ingenio",
        imagen: "https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2019/08/24185712/portada_yo-no-queria-escribir-cuentos_pierre-castro_201907011842-698x1024.jpg",
        comentarios: []
    },
    {
        titulo: "Miénteme si puedes",
        autor: "Rosa Maria Sifuentes",
        categoria: "Libro",
        descripcion: "Libro de autoayuda",
        imagen: "https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2019/08/24185903/portada_mienteme-si-puedes_rosa-maria-cifuentes-castaneda_201905132215-669x1024.jpg",
        comentarios: []
    },

    {
        titulo: "El homonimo",
        autor: "Bruno Rivas",
        categoria: "Novela",
        descripcion: "",
        imagen: "https://substackcdn.com/image/fetch/$s_!07zj!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95e11fc9-53dd-4bad-90e6-2aac8e3bd637_1415x2048.jpeg",
        comentarios: []
    },
    {
        titulo: "La Ciudad y los Perros",
        autor: "Mario vargas Llosa",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://www.rae.es/sites/default/files/la_ciudad_y_los_perros.jpg",
        comentarios: []   
    },
    {
        titulo: "El año en que nació el demonio",
        autor: "santiago Roncagliolo",
        categoria: "Novela",
        descripcion: "",
        imagen: "https://substackcdn.com/image/fetch/$s_!4RIS!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7069a3c0-7790-4451-8773-5f71c4828952_2000x3409.jpeg",
        comentarios: []
    },
    {
        titulo: "El escarbajo y el hombre",
        autor: "Oswlado Reynoso",
        categoria: "Novela",
        descripcion: "Clásico de la literatura",
        imagen: "https://substackcdn.com/image/fetch/$s_!Q4VK!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1d2a4151-30f0-4389-a045-8996ae669915_397x627.jpeg",
        comentarios: []   
    },
    {

        titulo: "Cuentos de buenas noches para niñas rebeldes",
        autor: "Francesca Cavallo",
        categoria: "Libros infantiles",
        descripcion: "Cuentos de buenas noches para niñas rebeldes reinventa los cuentos de hadas e inspira a las niñas con las historias de 110 mujeres extraordinarias",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOhdS9SU6xxAOdxO9jOzd9jNQGw66k5IpQQ&s",
        comentarios: []   
    },
    {
        titulo: "Chimoc quiere ser presidente",
        autor: "Claudia y Andrea Paz",
        categoria: "Libro infantil",
        descripcion: "",
        imagen: "https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2019/08/24185842/chimoc-778x1024.jpg",
        comentarios: []
    },

];

let categoriaActual = "Todos";
let misReservas = [];
let libroActualIndex = null;

// ================= RENDER LIBROS =================
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

    // 🔥 ESTO FALTABA
    btn.textContent = "Reservar";
    btn.style.display = "inline-block";

    btn.onclick = () => reservarLibro(index);

    renderComentarios();

    document.querySelector(".libros").style.display = "none";
    document.getElementById("detalleLibro").classList.remove("oculto");
}

// ================= RESERVA =================
function reservarLibro(index) {
    let libro = libros[index];

    let existe = misReservas.some(r => r.titulo === libro.titulo);
    if (existe) return mostrarToast("Ya reservaste este libro", "warning");

    misReservas.push({
        titulo: libro.titulo,
        fecha: new Date().toLocaleDateString()
    });

    mostrarToast("Reserva realizada", "success");
}

function irMisPrestamos() {
    document.querySelector(".libros").style.display = "none";
    document.getElementById("detalleLibro").classList.add("oculto");
    document.getElementById("misPrestamos").classList.remove("oculto");

    renderMisReservas();
}

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

function cancelarReserva(i) {
    misReservas.splice(i, 1);
    renderMisReservas();
}


// ================= COMENTARIOS =================
function agregarComentario() {
    let input = document.getElementById("inputComentario");
    let texto = input.value.trim();

    if (texto === "") return mostrarToast("Escribe un comentario", "warning");

    libros[libroActualIndex].comentarios.push(texto);

    input.value = "";
    renderComentarios();

    mostrarToast("Comentario agregado", "success");
}

function renderComentarios() {
    let contenedor = document.getElementById("listaComentarios");
    contenedor.innerHTML = "";

    let comentarios = libros[libroActualIndex].comentarios;

    if (comentarios.length === 0) {
        contenedor.innerHTML = "<p>No hay comentarios aún</p>";
        return;
    }

    comentarios.forEach(c => {
        contenedor.innerHTML += `<div class="comentario">${c}</div>`;
    });
}

// ================= NAVEGACIÓN =================
function volver() {
    document.querySelector(".libros").style.display = "block";
    document.getElementById("detalleLibro").classList.add("oculto");
}
function volverInicio() {
    // Mostrar catálogo
    document.querySelector(".libros").style.display = "block";

    // Ocultar reservas
    document.getElementById("misPrestamos").classList.add("oculto");

    // Ocultar detalle (por si acaso)
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

// ================= INICIAL =================
renderLibros(libros);