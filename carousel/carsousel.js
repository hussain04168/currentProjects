const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slideContainer = document.querySelector(".slide-parent");
const dots = document.querySelectorAll(".dot-child");
let currentSlide = 0;
let slides = document.querySelectorAll(".slide-child");

slides[currentSlide].classList.add("show-slide");

nextButton.addEventListener("click", () => {
  slides[currentSlide].classList.remove("show-slide");
  currentSlide++;
  if (currentSlide === 4) {
    currentSlide = 0;
    slides[currentSlide].classList.add("show-slide");
  } else {
    slides[currentSlide].classList.add("show-slide");
  }
});

previousButton.addEventListener("click", () => {
  slides[currentSlide].classList.remove("show-slide");
  currentSlide--;
  if (currentSlide === -1) {
    currentSlide = 3;
    slides[currentSlide].classList.add("show-slide");
  } else {
    slides[currentSlide].classList.add("show-slide");
  }
});
