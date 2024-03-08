// Selecciona el botón de modo nocturno
const darkModeButton = document.querySelector("#dark-mode-toggle");

const headerElement = document.querySelector(".header__styles_1");

const pElement = document.querySelector(".dark-mode-x");
const spanElement = document.querySelector(".modo-oscuro");
const buttomElement = document.querySelector(".modo-oscuro-2");
const xElement = document.querySelector(".x1");
const yElement = document.querySelectorAll(".color-gris");
const zElement = document.querySelectorAll(".color-oscuro");
const lElement = document.querySelector(".color-line");
const rElement = document.querySelector(".color-nav");
const kElement = document.querySelectorAll(".nav__link");

// Selecciona todos los elementos con la clase 'logo-img'
const logoImgs = document.querySelectorAll('.logo-img');


// Agrega un event listener para cambiar al modo nocturno
darkModeButton.addEventListener("click", function() {
    // Agrega o elimina la clase 'dark-mode' del elemento body
    document.body.classList.toggle("dark-mode-1");
    headerElement.classList.toggle("dark-mode");
    pElement.classList.toggle("dark-mode-x");
    spanElement.classList.toggle("dark-mode-1");
    buttomElement.classList.toggle("dark-mode-2");
    xElement.classList.toggle("modo-oscuro-x1");
    yElement.forEach(element => element.classList.toggle("style-box"));
    zElement.forEach(element => element.classList.toggle("style-box"));
    lElement.classList.toggle("style-box");
    rElement.classList.toggle("style-nav");
    kElement.forEach(element => element.classList.toggle("link-color"));


    // Itera sobre cada elemento de logoImg
    logoImgs.forEach(logoImg => {
      if (document.body.classList.contains("dark-mode-1")) {
          // Modo nocturno, muestra la imagen de noche
          logoImg.src = "../img/HealthNutrition  (1) 1.svg";
      } else {
          // Modo diurno, muestra la imagen normal
          logoImg.src = "../img/HealthNutrition  1.png";
      }
  });
});

// Errores identificados 
/*
cuando se cambia a otra pagina se cancela el modo noche o cuando se pone en ingles tambien se cancela 
*/ 
