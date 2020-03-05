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

(() => {
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Golf");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
})();

(() => {
var slideIndex = 0;
carousel();

function carousel() {
  console.log(slideIndex);
  var i;
  var x = document.getElementsByClassName("tesla");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  console.log(slideIndex);
  if (slideIndex > x.length) {slideIndex = 1}
  console.log(slideIndex);
  x[slideIndex-1].style.display = "block";
  console.log(slideIndex);
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
})();
