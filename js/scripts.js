"use strict";

(() => {
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");
const toggleMenu = () => {
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle");


}
menuToggle.addEventListener("click", toggleMenu)
})();

(() => {
const searchToggle = document.getElementById("search-toggle");
const searchNav = document.getElementById("search-bar");
const toggleSearch = () => {
  console.log("called toggleSearch");
  searchNav.classList.toggle("search-toggle");


}
searchToggle.addEventListener("click", toggleSearch)
})();
