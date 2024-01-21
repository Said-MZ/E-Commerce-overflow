// loader

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

//navbar

const burger = document.querySelector(".burger");
const smallNav = document.querySelector(".small-nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  smallNav.classList.toggle("active");
});
