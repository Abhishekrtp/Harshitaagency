const addEventOnElement = function (elements, evetType, callback) {
  for (let i = 0; len = elements.length, i < len; i++) {
    elements[i].addEventListener(evetType, callback);
  }

}





// navbar toggle for mobile

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

const overlay = document.querySelector("[data-overlay]");


const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  
  document.body.classList.toggle("nav-active");

};



addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);



const parallaxElements = document.querySelectorAll("[data-parallax]");


window.addEventListener("mousemove", event => {

  for (let i=0 , len = parallaxElements.length; i<len; i++) {

    const movementX = (event.clientX / window.innerWidth) * Number (parallaxElements[i].dataset.parallaxSpeed);

    const movementY = (event.clientY / window.innerHeight) * Number (parallaxElements[i].dataset.parallaxSpeed);

    parallaxElements[i].animate({

      transform: `translate(${movementX}px, ${movementY}px)`
    }, {duration: 500, fill: "forwards"});

 



  }
})


const navbar1 = document.querySelector("[data-navbar-1]");
const navToggleBtn1 = document.querySelector("[data-nav-toggle-btn-1]");

const overlay1 = document.querySelector("[data-overlay-1]");


const toggleNavbar1 = function () {
  navbar1.classList.toggle("active");
  navToggleBtn1.classList.toggle("active");
  overlay1.classList.toggle("active");
  // navToggleBtn.innerHTML = "&#10006;";
  
  // document.body.classList.toggle("nav-active");

};



addEventOnElement([navToggleBtn1, overlay1], "click", toggleNavbar);


