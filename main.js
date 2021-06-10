const button = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");

button.addEventListener("click", function () {
  menu.classList.toggle("open");
});
