window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// carousel

document.addEventListener("DOMContentLoaded", function () {
  var carouselSlide = document.querySelector(".testislide-slide");
  var carouselSlides = document.querySelectorAll(".testislide-slide .slide");
  var bullets = document.querySelectorAll(".bullet");

  var currentIndex = 0;
  var slideInterval = setInterval(goToNextSlide, 3000);

  function showSlide(index) {
    carouselSlides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    carouselSlides[index].classList.add("active");

    bullets.forEach(function (bullet) {
      bullet.classList.remove("active");
    });

    bullets[index].classList.add("active");
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  function goToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = testislide.length - 1;
    }
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= testislide.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  bullets.forEach(function (bullet, index) {
    bullet.addEventListener("click", function () {
      clearInterval(slideInterval);
      goToSlide(index);
      slideInterval = setInterval(goToNextSlide, 3000);
    });
  });

  showSlide(currentIndex);
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
