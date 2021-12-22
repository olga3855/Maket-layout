const menu = document.getElementById("menu");
const mainMenu = document.getElementsByClassName("main_menu")[0];

menu.addEventListener("click", () => {
  mainMenu.classList.add("open");
});

mainMenu.addEventListener("click", () => {
  mainMenu.classList.remove("open");
});



const slides = document.getElementsByClassName("vector");
let index = 0;
let i;
let timer;

function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1
  }
  slides[index - 1].style.display = "block";
  let timer = setTimeout(showSlides, 3000);
  console.log(index)
  if (window.innerWidth <= 768) {
    clearTimeout(timer);
  }
}

showSlides();
