// Selecciona el botón usando su id del HTML
const button = document.getElementById("main_button")

// Escucha cuando se hace click en el botón
button.addEventListener("click", cambiarTexto)

// Función que se ejecuta al hacer click
function cambiarTexto () {
    // Cambia el texto del botón
    button.textContent = "Has hecho click al boton"
}


// Selecciona el formulario por su id
const formularioWeb = document.getElementById("formulario")

// Escucha cuando se envía el formulario
formularioWeb.addEventListener("submit", (event) => {

    // Evita que la página se recargue (comportamiento por defecto)
    event.preventDefault()

    // Crea un objeto con los datos del formulario
    // event.target = el formulario
    // [0], [1], etc = inputs en orden
    const objeto = {
        "nombre": event.target[0].value,
        "email": event.target[1].value,
        "password": event.target[2].value,
        "fecha": event.target[3].value
    }

    // Muestra los datos en consola
    console.log(objeto)

    // Envía los datos a un backend (servidor)
    fetch("urldelbackend", {
        method: 'POST', // tipo de petición
        body: JSON.stringify(objeto) // convierte el objeto a JSON
    })
})