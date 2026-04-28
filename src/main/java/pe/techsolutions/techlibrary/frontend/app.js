const API = "http://localhost:8080/api";

// 📚 Cargar libros
function cargarLibros() {
    fetch(API + "/libros")
        .then(res => res.json())
        .then(data => {
            const tabla = document.getElementById("tablaLibros");
            tabla.innerHTML = "";

            data.forEach(libro => {
                const fila = `
                    <tr>
                        <td>${libro.titulo}</td>
                        <td>${libro.autor.nombre}</td>
                        <td>${libro.categoria.nombre}</td>
                        <td>${libro.cantidadDisponible}</td>
                    </tr>
                `;
                tabla.innerHTML += fila;
            });
        })
        .catch(error => console.error("Error:", error));
}

// 👤 Crear usuario
function crearUsuario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    fetch(API + "/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            password: "123456",
            rol: "LECTOR"
        })
    })
    .then(res => res.json())
    .then(() => {
        alert("Usuario creado correctamente");
    })
    .catch(error => console.error("Error:", error));
}