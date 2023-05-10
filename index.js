
//const slides = document.querySelectorAll(".slider-slide");
//const dots = document.querySelectorAll(".dot");

//let slideIndex = 1;

//showSlides(slideIndex);
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]

let dotsId = ["Dots1", "Dots2"]

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//  function currentSlide(n, no) {
//    showSlides(slideIndex[no] = n);
//  }


function showSlides(n,no) {

  let i;

  let x = document.getElementsByClassName(slideId[no]);
  // let y = document.getElementsByClassName(dotsId[no]);

  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  // for (i = 0; i < y.length; i++) {
  //   y[i].className = y[i].className.replace(" active", "");
  // }
  x[slideIndex[no]-1].style.display = "block"; 
  // y[slideIndex-1].className += " active";
  //slides[slideIndex-1].style.display = "block";  
  //x[slideIndex[no]-1].className += " active";
  
}

/*

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
   ;
  slideIndex+=1; 
  showSlides(slideIndex);
}

document.querySelector(".phone-container").addEventListener("click", () => {
  clearTimeout(interval);
  interval = setInterval(carousel, 10000);
  
})


let interval = setInterval(carousel,3000);

function carousel(no){
  let x = document.getElementsByClassName(slideId[no])
  slideIndex[x]+=1; 
  showSlides(slideIndex[x]);
}


let phoneContainer = document.querySelectorAll(".phone-container");
phoneContainer.forEach(container => {
  container.addEventListener("click", () => {
    clearTimeout(interval);
    interval = setInterval(carousel, 10000);
  })
})
  */