window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// hamburger starts

function burger() {
  var x = document.getElementById("navmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// hamburger ends

// scroll animation starts

window.addEventListener("scroll", function () {
  var element = document.getElementById("abthead");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // When the element is in the viewport
  if (position.top >= 0 && position.bottom <= windowHeight) {
    element.classList.add("about-header");
  } else {
    element.classList.remove("about-header");
  }
});

window.addEventListener("scroll", function () {
  var element = document.getElementById("herocontent");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // When the element is in the viewport
  if (position.top >= 0 && position.bottom <= windowHeight) {
    element.classList.add("hero-insider");
  } else {
    element.classList.remove("hero-insider");
  }
});

// scroll animation ends
