const button = document.querySelector(".menu-button");
const header = document.querySelector(".header");

button.addEventListener("click", function () {
  header.classList.toggle("open");
});
