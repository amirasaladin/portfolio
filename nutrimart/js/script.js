$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 0) {
        $(".img-3").slideDown(1000);
    }
});

// PRELOADER -------------------------------------------
var preloader;

function preload(opacity) {
    // back to <=0 before production
    if (opacity <= 0) {
        showContent();
    } else {
        preloader.style.opacity = opacity;
        window.setTimeout(function () {
            preload(opacity - 0.05)
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

// CONTACT-US PAGE ALERT --------------------------------
$("#alert-div").click(function () {
    $(this).addClass('d-none');
});


// HOME PAGE DIFFERENT SCROLL SPEEDS FOR THE IMAGE ANIMATION --------------------------------------
$.fn.moveIt = function () {
    var $window = $(window);
    var instances = [];

    $(this).each(function () {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function () {
        var scrollTop = $window.scrollTop();
        instances.forEach(function (inst) {
            inst.update(scrollTop);
        });
    }, {
        passive: true
    });
}

var moveItItem = function (el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function (scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function () {
    $('[data-scroll-speed]').moveIt();
});




$(document).ready(function () {

    // MENU
    $(".menu-btn").click(function () {
        $(this).toggleClass("active");
        $("#menu").toggleClass("show hide");
    });

    // SEARCH FORM CLONE
    $('#search-content').clone().appendTo('.search-resp');

    // #EXPLORE-MORE SECTION ---------------------------------------------------------
    $(".title-box")
        .clone()
        .appendTo(".title-div")
        .css({
            background: "none",
            "z-index": 1
        });
    $(".title-box")
        .clone()
        .appendTo(".title-div")
        .css({
            opacity: "0.7",
            "z-index": 2
        });

    // #diets SECTION -----------------------------------------------------------------
    $(".text-cont-diets")
        .clone()
        .appendTo(".text-lg-cont")
        .css({
            background: "none",
            "z-index": 1
        });
    $(".text-cont-diets")
        .clone()
        .appendTo(".text-lg-cont")
        .css({
            opacity: "0.7",
            "z-index": 2
        });

    // #diets SECTION -----------------------------------------------------------------

    // OWL CAROUSEL
    $("#owl-products").owlCarousel({
        // margin: 50,
        // stagePadding: 10,
        // items: 3,
        nav: false,
        dots: false,
        autoHeight: true,
        loop: true,
        responsive: {
            0: {
                margin: 20,
                center: true,
                items: 1,
                stagePadding: 50,
            },
            768: {
                margin: 20,
                center: true,
                items: 1,
                stagePadding: 200,
            },
            992: {
                margin: 50,
                stagePadding: 10,
            },
        }
    });
});

// OWL PRODUCTS LEVELS
if ($(window).width() > 576) {
    for (n = 1; n < $("#products .item").length; n++) {
        $("#products #" + n * n).addClass("mt-6");
        $("#products #" + 3 * n).addClass("mt-7");
    }
} else {
    $("#products .item").removeClass("mt-6 mt-7");
}

// CUSTOM SELECT AT PRODUCTS/Diets PAGE --------------------------------------------
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
                  and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
      except the current select box:*/
    var x,
        y,
        i,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// END OF CUSTOM SELECT AT PRODUCTS/Diets PAGE ------------------------------------------------

// DIETS PAGE SELECT OPTIONS TO REDIRECT TO PAGES
jQuery(function ($) {
    $("#side-menu").on("change", function () {
        var url = $(this).val();
        if (url) {
            window.location = url;
        }
        return false;
    });
});

// AOS init----------------------------------
AOS.init();


// SEPARATE EACH LETTER INTO SPAN AND ADD AOS ATTRIBUTES TO IT ----------------------------------------
for (var n = 1; n < 10; n++) {
    var $div = $("#title-" + n)
        .clone()
        .html("");
    $("#title-" + n)
        .contents()
        .each(function () {
            var spanClass = "";

            if ($(this).is("span")) {
                spanClass = $(this).attr("class");
            }

            $textArray = $(this)
                .text()
                .split("");

            for (var i = 0; i < $textArray.length; i++) {
                $(
                        '<span data-aos="zoom-in-left" data-aos-easing="ease-in-out" data-aos-delay="' +
                        50 * i +
                        '">'
                    )
                    .addClass(spanClass)
                    .text($textArray[i])
                    .appendTo($div);
            }
        });

    $("#title-" + n).replaceWith($div);
}

// SCROLL for links bg
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 500) {
        $(".link1 div").addClass("scrolled");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 1500) {
        $(".link2 div").addClass("scrolled");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 2400) {
        $(".link3 div").addClass("scrolled");
    }
});
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     if (scroll >= 0) {
//         $(".img-1").slideDown(1000);
//     }
// });
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 2000) {
        $(".img-2").slideDown(1000);
    }
});