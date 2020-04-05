"use strict";

(() => {
  /*code taken and refined from https://www.w3schools.com/howto/howto_js_slideshow.asp */
  let slideIndex = [1, 1, 1];
  carousel("Golf", 0);
  carousel("tesla", 1);
  carousel("Bentley", 2);


  function carousel(slideId, no) {
    const imageclass = document.getElementsByClassName(slideId);
    for (let index = 0; index < imageclass.length; index++) {
      imageclass[index].classList.add("Hide");
    }
    slideIndex[no]++;
    if (slideIndex[no] > imageclass.length) {
      slideIndex[no] = 1
    }
    imageclass[slideIndex[no] - 1].classList.remove("Hide");
    setTimeout(carousel, 2000, slideId, no);

  }
})();




/*
let slideIndex = [1,1,1];
const slideId = ["Golf", "tesla", "Bentley"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  const x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (let i = 0; i < x.length; i++) {
     x[i].classList.add("Hide");
  }
  x[slideIndex[no]-1].classList.remove("Hide");
}
*/
