///////////////////////////ejercicio 2.1///////////////////////////

const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);
console.log(nuevoDiv);

///////////////////////////ejercicio 2.2///////////////////////////

const nuevoDivP = document.createElement("div");
const nuevoP = document.createElement("p");

nuevoDivP.appendChild(nuevoP);
document.body.appendChild(nuevoDivP);
console.log(nuevoDivP);

///////////////////////////ejercicio 2.3///////////////////////////
const nuevoDivParrafos = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const nuevosParrafos = document.createElement("p");
  nuevoDivParrafos.appendChild(nuevosParrafos);
}
document.body.appendChild(nuevoDivParrafos);
console.log(nuevoDivParrafos);

///////////////////////////ejercicio 2.4///////////////////////////

const insertarTexto = document.createElement("p");
insertarTexto.textContent = "Soy Dinamico";
document.body.appendChild(insertarTexto);
console.log(insertarTexto);

///////////////////////////ejercicio 2.5///////////////////////////

const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

///////////////////////////ejercicio 2.6///////////////////////////
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(ul);

///////////////////////////ejercicio 2.7///////////////////////////

const eliminar = document.querySelectorAll(".fn-remove-me");

for (const nodo of eliminar) {
  nodo.remove();
}

///////////////////////////ejercicio 2.8///////////////////////////

const texto = document.querySelector("div:not([class]) + div:not([class])");

texto.insertAdjacentHTML("beforebegin", "<p>Voy en medio</p>");

///////////////////////////ejercicio 2.9///////////////////////////


const textInside = document.querySelectorAll(".fn-insert-here");


for (const text of textInside) {
    const pInside = document.createElement("p");
    pInside.textContent = "Voy dentro!";
    text.appendChild(pInside)
}

console.log(textInside);