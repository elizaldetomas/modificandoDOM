const botonSaludo = document.querySelector('#saludar');
const botonEliminar = document.querySelector('#eliminar');

botonSaludo.addEventListener("click", () => {
    let saludo = document.querySelector(".saludo").cloneNode(true) // clona todos los hijos
    document.querySelector('.chat').appendChild(saludo);
});

botonEliminar.addEventListener("click", () => {
    let mensajes = document.querySelectorAll(".saludo");
    let ultMensaje = mensajes[mensajes.length-1];
    if (mensajes.length > 1) {
        document.querySelector('.chat').removeChild(ultMensaje);
    }
    else {
        alert("¡El primer mensaje está fijado!")
    }
});