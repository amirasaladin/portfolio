// Smooth full page scrolling
function init(){
	new SmoothScroll(document,120,20)
}

function SmoothScroll(target, speed, smooth) {
	if (target == document)
		target = (document.documentElement || document.body.parentNode || document.body) // cross browser support for document scrolling
	var moving = false
	var pos = target.scrollTop
	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {
		moving = true
		var delta = (pos - target.scrollTop) / smooth
		target.scrollTop += delta
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}



// Carousel swipe
$(document).ready(function() {
  $("#myCarousel").swiperight(function() {
     $(this).carousel('prev');
   });
  $("#myCarousel").swipeleft(function() {
     $(this).carousel('next');
  });
});


// Carousel Drag
// new Dragdealer('carouselExampleControlsTwo', {
//   steps: 0,
//   speed: 0.3,
//   loose: true
// });



// Sectors Carousel
$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});
// end of sectors carousel

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

// JS (menu toggle)

$(document).ready(function(){
  $('.hamburger').click(function(){
      $(this).toggleClass('open');
      $('.menu-overlay').toggleClass('open');
   });
});


// Scrollbar JS

    (function($){
$(window).on("load",function(){
$(".mcs-horizontal-example").mCustomScrollbar({
  axis:"x",
  theme:"dark"
});
});
})(jQuery);

$(".mcs-horizontal-example").mCustomScrollbar({
axis:"x",
theme:"dark",
advanced:{ autoExpandHorizontalScroll:true }
});


// Carousel JS
    $(document).ready(function(){
      $('#carouselExampleControlsThree').carousel();
      $('#carouselExampleControlsTwo').carousel();
      $('#carouselExampleControls').carousel();
    })

    jQuery(window).load(function() {
 
        /*
            Stop carousel
        */
        $('.carousel').carousel('pause');
     
    });

// Animate
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 250, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

