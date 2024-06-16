 /*
 Se tiene como base:

function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

 */
 
 
 
 // Función para cambiar el color de un elemento
 function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Seleccionamos el elemento
const ele = document.getElementById("ele1");

// Aplicamos el color verde por defecto al cargar la página
pintar(ele);

// Añadimos un evento de clic para cambiar el color a amarillo
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});