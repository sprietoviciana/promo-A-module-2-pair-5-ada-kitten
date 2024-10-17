"use strict";

const list = document.querySelector(".js-list");

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente. "
const kittenBreed1 = "Siamés"
const kittenOne =
 `<li class="card">
  <article>
  <img
    class="card_img"
    src= ${kittenImage1}
    alt= 
  />
    <h3 class="card_title"> ${kittenName1}</h3>
    <h4 class="card_race"> ${kittenBreed1}</h4>
    <p class="card_description"> ${kittenDesc1}       
    </p>
  </article>
</li>`;

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 = " Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."
const kittenBreed2 = "Sphynx"
const kittenTwo = `<li class="card">
  <img
    class="card_img"
    src= ${kittenImage2}
    alt="sphynx-cat" 
  />
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${kittenBreed2}</h4>
  <p class="card_description">
    ${kittenDesc2}
  </p>
</li>`;


const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 = " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."
const kittenBreed3 = "Maine Coon"

const kittenThree = `<li class="card">
  <img
    class="card_img" 
    src="${kittenImage3}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenBreed3}</h4>
  <p class="card_description">
    ${kittenDesc3}
  </p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

const addCat = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".new-form");

addCat.addEventListener("click", () => {
  newForm.classList.remove("collapsed");
  console.log("la usuaria hace click");
});

const buttonsearch = document.querySelector(".js_button-search");
const input = document.querySelector(".js_in_search_desc");

if (input.includes(kittenDesc1)) {
    buttonsearch.addEventListener("click", (event) => {
  event.preventDefault();
  const descriptionInput = input.value;
  list.innerHTML = kittenOne;
 
  console.log("gatito")
})
else {
  list.innerHTML = kittenOne + kittenTwo + kittenThree;
 }
}
