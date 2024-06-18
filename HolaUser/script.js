
const botonNombre= document.getElementById("idNombre");
botonNombre.addEventListener("click",Nombre);

// FUNCION RECOGER NOMBRE
function Nombre() {
    let nombre = prompt("Introduce  nombre:");
    if (nombre) {
        document.getElementById("saludo").innerHTML = "Hola, " + nombre;
    }
}