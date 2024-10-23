"use strict";

const list = document.querySelector(".js-list");

const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente. ",
  breed: "Siamés",
};

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  breed: "Sphynx",
};

const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  breed: "Maine Coon",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
const kittenOne = `<li class="card">
  <article>
  <img
    class="card_img"
    src= ${kittenData_1.image}
    alt= 
  />
    <h3 class="card_title"> ${kittenData_1.name}</h3>
    <h4 class="card_race"> ${kittenData_1.breed}</h4>
    <p class="card_description"> ${kittenData_1.desc}       
    </p>
  </article>
</li>`;

const kittenTwo = `<li class="card">
  <img
    class="card_img"
    src= ${kittenData_2.image}
    alt="sphynx-cat" 
  />
  <h3 class="card_title">${kittenData_2.name}</h3>
  <h4 class="card_race">${kittenData_2.breed}</h4>
  <p class="card_description">
    ${kittenData_2.desc}
  </p>
</li>`;

const kittenThree = `<li class="card">
  <img
    class="card_img" 
    src="${kittenData_3.image}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">${kittenData_3.name}</h3>
  <h4 class="card_race">${kittenData_3.breed}</h4>
  <p class="card_description">
    ${kittenData_3.desc}
  </p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

const addCat = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".new-form");

addCat.addEventListener("click", () => {
  newForm.classList.toggle("collapsed");
});

const buttonsearch = document.querySelector(".js_button-search");
const input = document.querySelector(".js_in_search_desc");
const inputBreed = document.querySelector(".js-in-breed");

function filterKitten(event) {
  event.preventDefault();
  const descriptionInput = input.value;
  const descriptionbreed = inputBreed.value;
  list.innerHTML = "";
  if (
    kittenData_1.desc.includes(descriptionInput) ||
    kittenData_1.breed.includes(descriptionbreed)
  ) {
    list.innerHTML += kittenOne;
  }

  if (kittenData_2.desc.includes(descriptionInput)) {
    list.innerHTML += kittenTwo;
  }

  if (kittenData_3.desc.includes(descriptionInput)) {
    list.innerHTML += kittenThree;
  }
}

buttonsearch.addEventListener("click", filterKitten);

