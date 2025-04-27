const menuIcon = document.getElementById("menu_bar");
const navLinks = document.querySelector(".navlinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

