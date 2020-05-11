"use strict";

var nextIcon = '<img class="right-arrow" src="/images/slider-icons/right-arrow.png" alt="right">';
var prevIcon = '<img  class="left-arrow" src="/images/slider-icons/left-arrow.png" alt="left" >';
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.trust-us__slider').owlCarousel({
    items: 3,
    loop: true
  });
});