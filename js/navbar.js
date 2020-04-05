"use strict";


(() => {
  const menuToggleOn = document.getElementById("menu-toggle");
  const menuToggleOff = document.getElementById("closetoggle");
  const menuNav = document.getElementById("menu-nav");
  const content = document.getElementById("content");
  const toggleMenu = () => {
    console.log("called toggleMenu");
    menuNav.classList.toggle("menu-toggle");
    content.classList.toggle("content-toggle");

  }



  menuToggleOn.addEventListener("click", toggleMenu);
  menuToggleOff.addEventListener("click", toggleMenu)
})();
