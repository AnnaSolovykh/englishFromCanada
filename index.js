let slides = document.querySelectorAll(".slider-slide");
let dots = document.querySelectorAll(".dot");



let slideIndex = 1;

showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function plusSlidesTwo(n) {
  showSlides(slideIndex += n);
}

function currentSlideTwo(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  }


let interval = setInterval( carousel,3000);

function carousel(){
  slideIndex+=1; 
  showSlides(slideIndex);
}

  document.querySelector(".phone-container").addEventListener("click", () => {
    clearTimeout(interval);
    interval = setInterval(carousel, 10000);
  })
  

