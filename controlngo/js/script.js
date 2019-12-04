// PRELOADER -------------------------------------------
var preloader;

function preload(opacity) {
  // back to <=0 before production
  if (opacity <= 0) {
    showContent();
  } else {
    preloader.style.opacity = opacity;
    window.setTimeout(function () {
      preload(opacity - 0.3)
    }, 100);
  };
};

function showContent() {
  preloader.style.display = 'none';
  document.getElementById('body-wrapper').style.visibility = 'visible';
  document.getElementById('body-wrapper').style.opacity = '1';
};

document.addEventListener("DOMContentLoaded", function () {
  preloader = document.getElementById('preloader');
  preload(1);
});


$(document).ready(function () {
$('#open').click(function () { 
    $('#menu').css({
      'opacity': 1,
      'visibility': 'visible'
    })
  });
  $('#close').click(function () {
    $('#menu').css({
      'opacity': 0,
      'visibility': 'hidden'
    })
  });
});

$("#owl-hero").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  singleItem: true,
  items: 1,
  navContainer: '#customNav-hero',
  dotsContainer: '#customDots-hero',
  navText: ["<div class='prev'></div>", "<div class='next'></div>"],
});

$("#owl-stories").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  // dotsContainer: '#dots',
  // dotsEach: true,
  singleItem: true,
  items: 1,
  navContainer: '#customNav',
  dotsContainer: '#customDots',
  navText: ["<div class='prev'></div>", "<div class='next'></div>"]
});
$("#owl-events").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  singleItem: true,
  items: 1,
  responsive: {
    992: {
      items: 3
    }
  }
});
