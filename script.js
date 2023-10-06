const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
menu.classList.toggle("active");
}); 