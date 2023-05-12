let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"];
let dotsId = ["Dots1", "Dots2"]

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}



function showSlides(n,no) {
  let i;
  var eachSlider = document.getElementsByClassName(slideId[no]);
  let eachDot = document.getElementsByClassName(dotsId[no]);
  if (n === undefined){n = ++slideIndex[no]};
  if (n > eachSlider.length) {slideIndex[no] = 1};
  if (n < 1) {slideIndex[no] = eachSlider.length};

  for (i = 0; i < eachSlider.length; i++) {
    eachSlider[i].style.display = "none";  
  }

  for (i = 0; i < eachDot.length; i++) {
    eachDot[i].className = eachDot[i].className.replace(" active", "");
  }
  eachSlider[slideIndex[no]-1].style.display = "block"; 
  eachDot[slideIndex[no]-1].className += " active";
}

let intervalOne = setInterval(carousel, 3000, 1, 0);
let intervalTwo = setInterval(carousel, 3000, 1, 1);

function carousel(n, no){
  n = 1
  slideIndex[no] += n
  showSlides(slideIndex[no], no);
}

document.querySelector(".phone-container-one").addEventListener("click", () => {
  clearTimeout(intervalOne);
  intervalOne = setInterval(carousel, 10000, 1, 0);
})

document.querySelector(".phone-container-two").addEventListener("click", () => {
  clearTimeout(intervalTwo);
  intervalTwo = setInterval(carousel, 10000, 1, 1);
})
