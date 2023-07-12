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



window.addEventListener("scroll", function () {
  var element = document.getElementById("offerleft");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // When the element is in the viewport
  if (position.top >= 0 && position.bottom <= windowHeight) {
    element.classList.add("our-offering-left");
  } else {
    element.classList.remove("our-offering-left");
  }
});


window.addEventListener("scroll", function () {
  var element = document.getElementById("offright");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // When the element is in the viewport
  if (position.top >= 0 && position.bottom <= windowHeight) {
    element.classList.add("offering-right");
  } else {
    element.classList.remove("offering-right");
  }
});


window.addEventListener("scroll", function () {
  var element = document.getElementById("victrt");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // When the element is in the viewport
  if (position.top >= 0 && position.bottom <= windowHeight) {
    element.classList.add("ourvictories-right");
  } else {
    element.classList.remove("ourvictories-right");
  }
});
// scroll animation ends

// overall animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



// Get the element to animate
window.addEventListener("scroll", function () {
  var element = document.getElementById("roborotate");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // When the element is in the viewport
  if (position.top >= 0 && position.bottom <= windowHeight) {
    element.classList.add("robotimg");
  } else {
    element.classList.remove("robotimg");
  }
});
