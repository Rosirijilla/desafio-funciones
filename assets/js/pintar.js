 /*
 Se tiene como base:

function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

 */
 
 function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

pintar(ele);

ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});