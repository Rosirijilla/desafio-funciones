function pintar_div(elemento, color) {
  elemento.style.backgroundColor = color;
}

let elemento1 = document.querySelector("#div1");
let elemento2 = document.querySelector("#div2");
let elemento3 = document.querySelector("#div3");
let elemento4 = document.querySelector("#div4");

elemento1.addEventListener("click", function () {
  pintar_div(elemento1, "black");
});
elemento2.addEventListener("click", function () {
  pintar_div(elemento2, "black");
});

elemento3.addEventListener("click", function () {
  pintar_div(elemento3, "black");
});

elemento4.addEventListener("click", function () {
  pintar_div(elemento4, "black");
});
