let slideIndex = 1;
showSlides(slideIndex);

function irelislide() {
  showSlides((slideIndex += 1));
}

function gerislide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-1");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const theme = localStorage.getItem("theme")

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode")
    if(theme==="dark"){
        localStorage.setItem("theme","light")

    }else{
        localStorage.setItem("theme","dark")

    }
 }