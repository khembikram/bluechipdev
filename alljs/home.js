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
  var carouselSlide = document.querySelector(".carousel-slide");
  var carouselSlides = document.querySelectorAll(".carousel-slide .slide");
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
      currentIndex = carouselSlides.length - 1;
    }
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= carouselSlides.length) {
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

// background changer

document.addEventListener("DOMContentLoaded", function () {
  const backgroundImageUrls = [
    "../allimages/hero.png",
    "../allimages/trade.jpg",
  ];

  const backgroundElement = document.getElementById("hero");
  let currentImageIndex = 0;

  function changeBackgroundImage() {
    backgroundElement.style.backgroundImage = `url(${backgroundImageUrls[currentImageIndex]})`;

    backgroundElement.style.transition = "background-position 1s";
    backgroundElement.style.backgroundPosition = "0% 50%";

    backgroundElement.style.transition = "background-position";
    backgroundElement.style.backgroundPosition = "100%";

    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % backgroundImageUrls.length;
    }, 9000);
  }
  setInterval(changeBackgroundImage, 10000);
});
