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
    searchNav.classList.toggle("search-toggle");
  }
  searchToggle.addEventListener("click", toggleSearch)
})();

(() => {
  let slideIndex = [1, 1, 1];
  const slideId = ["Golf", "tesla", "Bentley"]
  carousel(0);
  carousel(1);
  carousel(2);

  function carousel(no) {
    const x = document.getElementsByClassName(slideId[no]);
    for (let i = 0; i < x.length; i++) {
      x[i].classList.add("Hide");
    }
    slideIndex[no]++;
    if (slideIndex[no] > x.length) {
      slideIndex[no] = 1
    }
    x[slideIndex[no] - 1].classList.remove("Hide");
    setTimeout(carousel, 2000, no);
    //setTimeout(carousel(no), 2000); // Change image every 2 seconds
  }
})();
