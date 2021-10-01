$(document).ready(function () {
  "use strict";
  /* =================================
	Header and Footer 
	=================================== */

  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = $(this).data("include") + ".html";
    $(this).load(file);
  });

  $('[data-toggle="tooltip"]').tooltip();

  /* =================================
	LOADER 
	=================================== */
  $(".loader").delay(400).fadeOut();
  $(".animationload").delay(400).fadeOut("fast");

  var bgi = $("[data-background]");
  bgi.length > 0 &&
    bgi.each(function () {
      var e = $(this),
        t = e.attr("data-background");
      e.css({ "background-image": "url(" + t + ")" });
    });

  var progressBar = $(".progress-bar");
  progressBar.length > 0 &&
    progressBar.each(function () {
      var e = $(this),
        t = e.attr("aria-valuenow");
      e.css({ width: t + "%" });
    });

  /* =================================
	NAVBAR 
	=================================== */

  jQuery(window).scroll(function () {
    var top = jQuery(document).scrollTop();
    var batas = 200;
    var navbar = jQuery(".navbar-main");
    var navbarnav = jQuery(".navbar-nav");
    var header = jQuery(".header");

    if (top > batas) {
      navbar.addClass("stiky");
    } else {
      navbar.removeClass("stiky");
      if (header.hasClass("header-2")) {
        navbarnav.removeClass("ml-auto");
      }
      if (header.hasClass("header-5")) {
        navbarnav.removeClass("ml-auto");
      }
    }
  });

  /* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
  var slides = $("#oc-fullslider"),
    b = slides.find(".owl-slide");
  b.each(function () {
    var e = $(this),
      ocImg = e.find("img").attr("src");
    e.css({ "background-image": "url(" + ocImg + ")" });

    console.log("tes " + ocImg);
  });

  slides.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    loop: true,
    animateIn: "fadeIn",
    animateOut: "rollOut",
    pagination: false,
    nav: true,
    navText: [
      "<span class='fa fa-chevron-left'></span>",
      "<span class='fa fa-chevron-right'></span>",
    ],
    dots: true,
  });

  /* =================================
	BACK TO TOP 
	=================================== */
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700;
  //grab the "back to top" link

  //hide or show the "back to top" link
  $(window).scroll(function () {
    var top = jQuery(document).scrollTop();
    top > offset
      ? $(".cd-top").addClass("cd-is-visible")
      : $(".cd-top").removeClass("cd-is-visible cd-fade-out");
    if (top < offset_opacity && top > offset) {
      $(".cd-top").addClass("cd-fade-out");
    }
    if (top > offset_opacity) {
      $(".cd-top").removeClass("cd-fade-out");
    }
  });

  /* =================================
	OWL
	=================================== */

  var caro = $("#caro");
  caro.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
  });
  var caro2 = $("#caro-2");
  caro2.owlCarousel({
    autoplay: true,
    margin: 30,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 3,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  var testimony = $("#testimonial");
  testimony.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });

  var testimony2 = $("#owl-testimony2");
  testimony2.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      "<span class='fa fa-chevron-left'></span>",
      "<span class='fa fa-chevron-right'></span>",
    ],
    dots: true,
    loop: true,
  });
  var caro_2_colm = $("#caro_2_colm");
  caro_2_colm.owlCarousel({
    autoplay: true,
    margin: 30,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    loop: true,
    nav: false,
    navText: [
      "<span class='fa fa-chevron-left'></span>",
      "<span class='fa fa-chevron-right'></span>",
    ],
    items: 2,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  var caro4 = $("#caro-4");
  caro4.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 4,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  /* =================================
	MAGNIFIC POPUP
	=================================== */
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "";
      },
    },
  });
});

$(window).load(function () {
  // PAGE IS FULLY LOADED
  // FADE OUT YOUR OVERLAYING DIV
  $("#copyright_year").html(new Date().getFullYear());

  //smooth scroll to top
  $(".cd-top").on("click", function (event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  setWhatsapp("social_whatsapp");
  $("#loading").fadeOut();
});

function setWhatsapp(id) {
  if (WURFL.is_mobile === true) {
    $("." + id).attr(
      "href",
      "whatsapp://send?phone=+919655692559&text=Hi, I am interested in MOBone 🍖 for my 🐕"
    );
  } else {
    $("." + id).attr(
      "href",
      "https://api.whatsapp.com/send?phone=+919655692559&text=Hi, I am interested in MOBone 🍖 for my 🐕"
    );
  }
}