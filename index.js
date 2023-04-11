/*const back = document.querySelector('#back');
const next = document.querySelector('#next');
const reviewsPhotos = document.querySelector('#reviewsAdults')

const photos = ['https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/1.jpeg?v=1654870642234',
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/2.jpeg?v=1654860970085', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/3.jpeg?v=1654860973816',
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/4.jpeg?v=1654860978475', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/5.jpeg?v=1654870645160', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/6.jpeg?v=1654860996037', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/7.jpeg?v=1654861012336', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/8.jpeg?v=1654861023895', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/9.jpeg?v=1654870658498', 
                'https://cdn.glitch.global/eed37653-c385-47bf-a8b0-a608ef59fdb9/10.jpeg?v=1654861049462'];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
    i = 0;
}
reviewsPhotos.src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
  reviewsPhotos.src = photos[i];
})

*/

let slides = document.querySelectorAll(".slider-slide");
let dots = document.querySelectorAll(".dot");

let slideIndex = 1;

showSlides(slideIndex);
carousel();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
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

function carousel() {
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].onclick = stop;
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}


let timer = setTimeout(carousel, 4000)
  function stop(){
    clearTimeout(timer);
  };