//////////////////////////ejercicio 1.1//////////////////////////////////////////

const button = document.querySelector(".showme");
console.log(button.textContent);

//////////////////////////ejercicio 1.2//////////////////////////////////////////

const titulo = document.querySelector("#pillado");
console.log(titulo.textContent);

//////////////////////////ejercicio 1.3//////////////////////////////////////////

 const parrafos = document.querySelectorAll("p");
 for (const parrafo of parrafos) {
     console.log(parrafo.textContent);
 }

 //////////////////////////ejercicio 1.4//////////////////////////////////////////

 const pokemones = document.querySelectorAll(".pokemon");
 for (const pokemon of pokemones) {
     console.log(pokemon.textContent);
 }

 //////////////////////////ejercicio 1.4//////////////////////////////////////////
 const personajes = document.querySelectorAll('[data-function="testMe"]'); 
 for (const personaje of personajes) {
    console.log(personaje.textContent);
 } 

  //////////////////////////ejercicio 1.5//////////////////////////////////////////

  const personajeThree = document.querySelectorAll('[data-function="testMe"]'); 

  const tercero = personajeThree[2];
  console.log(tercero.textContent);
  