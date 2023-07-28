const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".hamburger-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});
