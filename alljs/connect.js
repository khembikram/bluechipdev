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

function burger(){
  var x = document.getElementById('navmenu');
  if(x.style.display === "block"){
    x.style.display = "none" ;
  }else{
    x.style.display = "block";
  }
}
  
  