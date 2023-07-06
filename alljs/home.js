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

// Get the desired element
const myElement = document.getElementById('myElement');

// Function to check if element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  if (isInView(myElement)) {
    // Element is in view, add transition class after 5 seconds
    setTimeout(() => {
      myElement.classList.add('transition-class');
    }, 5000);
  } else {
    // Element is out of view, remove transition class
    myElement.classList.remove('transition-class');
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
