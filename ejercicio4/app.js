////////////////////////////////////////ejercicio 4.1////////////////////////////////

const button = document.createElement("button");
button.id = "btnToClick";
button.textContent = "Haz click";
document.body.appendChild(button);

button.addEventListener("click", (event) => {
  console.log(event);
});

////////////////////////////////////////ejercicio 4.2////////////////////////////////

const foco = document.querySelectorAll("input");

for (const focos of foco) {
  focos.addEventListener("focus", (event) => {
    console.log(event.target.value);
  });
}

const inputEvents = document.querySelectorAll("input");

for (const inputEvent of inputEvents) {
  inputEvent.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
}

////////////////////////////////////////ejercicio 4.3////////////////////////////////

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const buttonAlbumes = document.createElement("button");
buttonAlbumes.textContent = "Clickea para imprimir Albumes";
buttonAlbumes.classList.add("buttonAlbum");
document.body.append(buttonAlbumes);

const ul = document.createElement("ul");
let almacenAlbumes = 0;

buttonAlbumes.addEventListener("click", () => {
  
    if (almacenAlbumes < albums.length) {
      const li = document.createElement("li");
      li.textContent = albums[almacenAlbumes];
      ul.appendChild(li);
      almacenAlbumes++;
    } else {
      alert("Ya no quedan mas albumes que agregar");
      
    }
  
});
document.body.appendChild(ul);