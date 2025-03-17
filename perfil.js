
let body = document.body;

let div = document.createElement("div");
div.setAttribute("id", "div-usuario"); // Aquí está corregido
body.appendChild(div);

let imagen = document.createElement("img");
imagen.setAttribute("id", "usuario_logo")
imagen.setAttribute("src", "limonna.jpg"); // Aquí también está corregido

div.appendChild(imagen);

let usuario = document.createElement("h1");
usuario.setAttribute("id", "nombre");
usuario.textContent="Beatriz Méndez";
div.appendChild(usuario);

let correo = document.createElement("p");
correo.setAttribute("id", "mail");
correo.textContent="beamendez@gmail.com"
div.appendChild(correo);

let logosContainer = document.createElement("div"); 
logosContainer.setAttribute("id", "logos-container"); // Agregar un contenedor para los íconos
div.appendChild(logosContainer); // Agregarlo al div principal

let imagen2 = document.createElement("img");
imagen2.setAttribute("class", "logos");
imagen2.setAttribute("src", "editar.png");

let imagen3 = document.createElement("img");
imagen3.setAttribute("class", "logos");
imagen3.setAttribute("src", "settings.png");

logosContainer.appendChild(imagen2);
logosContainer.appendChild(imagen3);



// Agregar evento para alternar el modo nocturno
document.addEventListener("DOMContentLoaded", () => {
    const switchModo = document.getElementById("modoSwitch");

    // Comprobar si el usuario tenía activado el modo oscuro antes
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
        switchModo.checked = true;
    }

    // Agregar evento al switch
    switchModo.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        // Guardar la preferencia en el almacenamiento local
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
        } else {
            localStorage.setItem("modo", "claro");
        }
    });
});

let div2 = document.createElement("div");
div2.setAttribute("id", "div-opciones"); // Aquí está corregido
body.appendChild(div2);

// Corrección: document.createElement en vez de createElement
let boton = document.createElement("button");
boton.setAttribute("id", "modificar-horario");
boton.textContent = "Modificar horario";
div2.appendChild(boton);

let boton2 = document.createElement("button"); // También corregido aquí
boton2.setAttribute("id", "modificar-codigo");
boton2.textContent = "Modificar código"; // Cambié el texto para diferenciar
div2.appendChild(boton2);

// Función para cambiar el contenido al presionar un botón
function mostrarInformacion(info) {
    let divInfo = document.getElementById("info");
    if (!divInfo) {
        divInfo = document.createElement("div");
        divInfo.setAttribute("id", "info");
        divInfo.style.marginTop = "1em";
        divInfo.style.textAlign = "center";
        document.body.appendChild(divInfo);
    }

    // Cambia el contenido según el botón presionado
    if (info === "horario") {
        divInfo.innerHTML = "<p>📅 Modificar el horario de atención.</p>";
    } else if (info === "codigo") {
        divInfo.innerHTML = "<p>🔧 Modificar configuración de códigos.</p>";
    }
}

// Agregar eventos a los botones
document.getElementById("modificar-horario").addEventListener("click", function() {
    mostrarInformacion("horario");
});

document.getElementById("modificar-codigo").addEventListener("click", function() {
    mostrarInformacion("codigo");
});










