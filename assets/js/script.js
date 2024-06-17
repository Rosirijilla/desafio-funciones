/*Requerimiento 3 */

let colorPrimero = "white";
let colorSegundo = "white";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorPrimero = "pink";
  } else if (event.key === "s") {
    colorPrimero = "orange";
  } else if (event.key === "d") {
    colorPrimero = "lightblue";
  }
  pintar1(colorPrimero);
});

function pintar1(color) {
  const elemento = document.querySelector("#key");
  elemento.style.backgroundColor = color;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "q") {
      colorSegundo = "purple";
    } else if (event.key === "w") {
      colorSegundo = "grey";
    } else if (event.key === "e") {
      colorSegundo = "brown";
    }
    pintar2(colorSegundo);
  });
  
  function pintar2(color) {
    const elemento = document.querySelector("#key2");
    elemento.style.backgroundColor = color;
  }
  
