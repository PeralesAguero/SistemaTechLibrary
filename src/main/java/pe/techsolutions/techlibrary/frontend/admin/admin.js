let libros = [];
let usuarios = [];
let prestamos = [];

let editandoLibro = null;
let editandoUsuario = null;

// NAV
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}

// TOAST
function mostrarToast(msg, tipo="success") {
    let t = document.createElement("div");
    t.className = `toast ${tipo}`;
    t.textContent = msg;

    document.getElementById("toastContainer").appendChild(t);

    setTimeout(()=>t.classList.add("show"),100);
    setTimeout(()=>{
        t.remove();
    },3000);
}

// LIBROS
function agregarLibro() {
    let t = titulo.value;
    let a = autor.value;

    if(!t || !a) return mostrarToast("Completa campos","error");

    if(editandoLibro!=null){
        libros[editandoLibro]={titulo:t,autor:a};
        editandoLibro=null;
    }else{
        libros.push({titulo:t,autor:a});
    }

    titulo.value="";
    autor.value="";
    renderLibros();
    actualizarDashboard();
    mostrarToast("Libro guardado");
}

function renderLibros(){
    tablaLibros.innerHTML="";
    libros.forEach((l,i)=>{
        tablaLibros.innerHTML+=`
        <tr>
        <td>${l.titulo}</td>
        <td>${l.autor}</td>
        <td>
        <button onclick="editarLibro(${i})">✏️</button>
        <button onclick="eliminarLibro(${i})">🗑️</button>
        </td>
        </tr>`;
    });
    actualizarSelects();
}

function editarLibro(i){
    titulo.value=libros[i].titulo;
    autor.value=libros[i].autor;
    editandoLibro=i;
}

function eliminarLibro(i){
    if(!confirm("Eliminar?")) return;
    libros.splice(i,1);
    renderLibros();
    actualizarDashboard();
}

// USUARIOS
function agregarUsuario(){
    let n=nombreUsuario.value;
    if(!n) return mostrarToast("Ingresa nombre","error");

    if(editandoUsuario!=null){
        usuarios[editandoUsuario]={nombre:n};
        editandoUsuario=null;
    }else usuarios.push({nombre:n});

    nombreUsuario.value="";
    renderUsuarios();
    actualizarDashboard();
    mostrarToast("Usuario guardado");
}

function renderUsuarios(){
    tablaUsuarios.innerHTML="";
    usuarios.forEach((u,i)=>{
        tablaUsuarios.innerHTML+=`
        <tr>
        <td>${u.nombre}</td>
        <td>
        <button onclick="editarUsuario(${i})">✏️</button>
        <button onclick="eliminarUsuario(${i})">🗑️</button>
        </td>
        </tr>`;
    });
    actualizarSelects();
}

function editarUsuario(i){
    nombreUsuario.value=usuarios[i].nombre;
    editandoUsuario=i;
}

function eliminarUsuario(i){
    if(!confirm("Eliminar?")) return;
    usuarios.splice(i,1);
    renderUsuarios();
    actualizarDashboard();
}

// PRESTAMOS
function agregarPrestamo(){
    let u=selectUsuario.value;
    let l=selectLibro.value;

    if(!u||!l) return mostrarToast("Selecciona datos","error");

    prestamos.push({usuario:u,libro:l});
    renderPrestamos();
    actualizarDashboard();
    mostrarToast("Préstamo registrado");
}

function renderPrestamos(){
    tablaPrestamos.innerHTML="";
    prestamos.forEach((p,i)=>{
        tablaPrestamos.innerHTML+=`
        <tr>
        <td>${p.usuario}</td>
        <td>${p.libro}</td>
        <td><button onclick="devolver(${i})">✅</button></td>
        </tr>`;
    });
}

function devolver(i){
    prestamos.splice(i,1);
    renderPrestamos();
    actualizarDashboard();
    mostrarToast("Devuelto");
}

// UTILS
function actualizarSelects(){
    selectUsuario.innerHTML="";
    selectLibro.innerHTML="";

    usuarios.forEach(u=>selectUsuario.innerHTML+=`<option>${u.nombre}</option>`);
    libros.forEach(l=>selectLibro.innerHTML+=`<option>${l.titulo}</option>`);
}

function actualizarDashboard(){
    totalLibros.textContent=libros.length;
    totalUsuarios.textContent=usuarios.length;
    totalPrestamos.textContent=prestamos.length;
}