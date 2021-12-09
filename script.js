const menu = document.getElementById("menu");
const mainMenu = document.getElementsByClassName("main_menu")[0];

menu.addEventListener("click", () => {
  mainMenu.classList.add("open");
});

mainMenu.addEventListener("click", () => {
  mainMenu.classList.remove("open");
});

const button = document.getElementById("button");
const slides = document.querySelectorAll("img");
let i = 0;

button.addEventListener("click", () => {
  ++i;
  if (i >= slides.length) {
    slides[i - 1].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
    
  } else {
    slides[i - 1].classList.remove("block");
    slides[i].classList.add("block");
  }
});