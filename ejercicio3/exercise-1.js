/////////////////////////////////ejercicio 3.1///////////////////////////////////

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
}
document.body.appendChild(ul);
/////////////////////////////////ejercicio 3.2///////////////////////////////////

const remover = document.querySelector(".fn-remove-me");

if (remover) {
  remover.remove();
}

/////////////////////////////////ejercicio 3.3///////////////////////////////////

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const dataFunction = document.querySelector('div[data-function="printHere"]');
const ulCars = document.createElement("ul");

for (const car of cars) {
  const liCars = document.createElement("li");
  liCars.textContent = car;
  ulCars.appendChild(liCars);
}
dataFunction.appendChild(ulCars);

/////////////////////////////////ejercicio 3.4 y ejercicio 3.6///////////////////////////////////

const cities = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const city of cities) {
  const divCities = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = city.title;
  divCities.appendChild(h4);
  const image = document.createElement("img");
  image.src = city.imgUrl;
  image.alt = city.title;
  divCities.appendChild(image);

  const buttonClear = document.createElement("button");
  buttonClear.classList.add("buttonclear");
  buttonClear.textContent = "Eliminar este div";
  divCities.appendChild(buttonClear);

  buttonClear.addEventListener("click", () => {
    divCities.remove();
    
  });
  document.body.appendChild(divCities);
}

/////////////////////////////////ejercicio 3.5///////////////////////////////////

const button = document.createElement("button");
button.textContent = "Eliminar último div";
button.classList.add("btn");
document.body.appendChild(button);

button.addEventListener("click", () => {
  const divs = document.querySelectorAll("body > div");
  if (divs) {
    divs[divs.length - 1].remove();
  }
});
