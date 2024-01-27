//Header Scroll Script------------------------------------------------------------------
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = '#222222F2';
    } 
    else {
        header.style.backgroundColor = '#1A1E1F';
    }
});

//Header Scroll Script------------------------------------------------------------------





//Header Responsive scroll script------------------------------------------------------------------

var lastScrollTop = 0

window.addEventListener("scroll", function() {
  var currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // On Scroll Down, hide the header
    document.getElementById("header").classList.add("scrolled");
  }
  else {
    // On Scroll Up, show the header
    document.getElementById("header").classList.remove("scrolled");
  }

  lastScrollTop = currentScroll;

});


//Header Responsive scroll script------------------------------------------------------------------




//Color change for clicked list items Script------------------------------------------------------------------
function changeColor(clickedElement, selector) {
    var items = document.querySelectorAll(selector);
    
    items.forEach(function(item) {
        item.classList.remove('clicked');
    });

    clickedElement.classList.add('clicked');
}

//Color change for clicked list items Script------------------------------------------------------------------




//Slider/Carousel Script------------------------------------------------------------------
const slides = document.querySelectorAll(".slides img");
const slidesPerPage = 3
let slideIndex = 0
let intervalId = null

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {
    if (slides.length > 0) {
        showSlides();
        intervalId = setInterval(nextSlide, 7000);

        const radioButtons = document.querySelectorAll(".slider-radio");
        radioButtons.forEach((radio, index) => {
            radio.addEventListener("click", () => {
                slideIndex = index * slidesPerPage;
                showSlides();
            });
        });
    }
}


function showSlides() {
    const endIndex = slideIndex + slidesPerPage;
    slides.forEach((slide, index) => {
        if (index >= slideIndex && index < endIndex) {
            slide.classList.add("displaySlide");
        } else {
            slide.classList.remove("displaySlide");
        }
    });

    const radioButtons = document.querySelectorAll(".slider-radio");
    radioButtons.forEach((radio, index) => {
        radio.checked = index * slidesPerPage === slideIndex;
    });
}



function prevSlide() {
    slideIndex -= slidesPerPage;
    if (slideIndex < 0) {
        slideIndex = Math.floor((slides.length - 1) / slidesPerPage) * slidesPerPage;
    }
    showSlides();
}



function nextSlide() {
    slideIndex += slidesPerPage;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}
//Slider/Carousel Script------------------------------------------------------------------





//Accordion/Dropdown Script------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const heading = item.querySelector('.accordion-item-heading');

        heading.addEventListener('click', function () {
            const content = item.querySelector('.accordion-item-content');
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});
//Accordion/Dropdown Script------------------------------------------------------------------




//Hamburger Menu Script------------------------------------------------------------------
var checkbox = document.getElementById("check");
var menu = document.querySelector(".right-hamburger-menu");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        menu.classList.add("menu-visible");
    } else {
        menu.classList.add("disappearing");
        setTimeout(function() {
            menu.classList.remove("menu-visible", "disappearing");
        }, 400);
    }
});
//Hamburger Menu Script------------------------------------------------------------------








//Toggle rules and darken rest screen script----------------------------------------------
function toggleRules() {
    var rulesContainer = document.querySelector('.rules-container');
    var rulesContent = document.querySelector('.rules-content');
    var body = document.body;
    var overlay = document.querySelector('.overlay');
    var checkbox = document.getElementById('toggleRulesCheckbox');
    rulesContainer.classList.toggle('show');
    rulesContent.classList.toggle('show');





    // Check if the container has the 'show' class and the checkbox is checked
    if (rulesContainer.classList.contains('show') && checkbox.checked) {
        
        // Apply blur effect to body when container has 'show' class and checkbox is checked
        rulesContainer.addEventListener('animationend', function () {
            body.style.backdropFilter = 'blur(100%)';
            overlay.style.display = 'block';
            body.style.overflowY = "auto"
            
        });
    } else {
        // Remove darken effect
        body.style.backdropFilter = 'none';
        overlay.style.display = 'none';
        body.style.overflowY = "auto"
        
        
    }
}

//Toggle rules and darken rest screen script----------------------------------------------
