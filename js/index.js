$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

window.addEventListener("scroll", function () {
  let navBar = document.getElementById("navbar_top");
  if (window.scrollY > 0) {
    navBar.classList.add("fixed-top");
    navBar.classList.add("navbar_top");
  } else {
    navBar.classList.remove("fixed-top");
    navBar.classList.remove("navbar_top");
  }
});
