console.log("hello");
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");
const toggleMenu = () =>
{
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle");
  

}
menuToggle.addEventListener("click", toggleMenu);

