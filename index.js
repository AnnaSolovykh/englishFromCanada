const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.btn');


burger.addEventListener('click', navSlide)

function navSlide () {
  burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index)=> {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.2}s`;
        }
        link.addEventListener( 'click', function(){
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
        })
    })
}


let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"];
//let dotsId = ["Dots1", "Dots2"]

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
  let eachSlider = document.getElementsByClassName(slideId[no]);
  //let eachDot = document.getElementsByClassName(dotsId[no]);
  if (n === undefined){n = ++slideIndex[no]};
  if (n > eachSlider.length) {slideIndex[no] = 1};
  if (n < 1) {slideIndex[no] = eachSlider.length};

  for (i = 0; i < eachSlider.length; i++) {
    eachSlider[i].style.display = "none";  
  }

  /*for (i = 0; i < eachDot.length; i++) {
    eachDot[i].className = eachDot[i].className.replace(" active", "");
  }*/
  eachSlider[slideIndex[no]-1].style.display = "block"; 
  //eachDot[slideIndex[no]-1].className += " active";
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


const poster = document.querySelector(".iframe-container");
const videos = document.querySelectorAll(".videos");
const iFrame = document.querySelector("#myIframe");
poster.addEventListener("click", removePoster);

videos.forEach( (item) => {
  item.addEventListener("click", () => {
    poster.classList.add("iframe-container-active");
  })
})

function removePoster() {
  poster.classList.add("iframe-container-active");
  iFrame.src += "?autoplay=1";
}


let toTopButton = document.getElementById("toTopButton");
let contactsContainer = document.querySelector(".contactActions");


window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
    contactsContainer.style.display = "block";
  } else {
    toTopButton.style.display = "none";
    contactsContainer.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


