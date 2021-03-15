// Variables declaration

const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot-child");
const dotOne = document.querySelector(".dot-1");
const dotTwo = document.querySelector(".dot-2");
const dotThree = document.querySelector(".dot-3");
const dotFour = document.querySelector(".dot-4");
let currentSlide = 0;
let slides = document.querySelectorAll(".slide-child");

slides[currentSlide].classList.add("show-slide");
dots[currentSlide].classList.add("show-dot");

// Next Button logic
nextButton.addEventListener("click", () => {
  slides[currentSlide].classList.remove("show-slide");
  dots[currentSlide].classList.remove("show-dot");
  currentSlide++;
  if (currentSlide === 4) {
    currentSlide = 0;
    slides[currentSlide].classList.add("show-slide");
    slides[currentSlide].style.animationName = "fade";
    dots[currentSlide].classList.add("show-dot");
  } else {
    slides[currentSlide].classList.add("show-slide");
    slides[currentSlide].style.animationName = "fade";
    dots[currentSlide].classList.add("show-dot");
  }
});

// Previous Button logic
previousButton.addEventListener("click", () => {
  slides[currentSlide].classList.remove("show-slide");
  dots[currentSlide].classList.remove("show-dot");
  currentSlide--;
  if (currentSlide === -1) {
    currentSlide = 3;
    slides[currentSlide].classList.add("show-slide");
    dots[currentSlide].classList.add("show-dot");
  } else {
    slides[currentSlide].classList.add("show-slide");
    dots[currentSlide].classList.add("show-dot");
  }
});

// Dot selection logic

// // First dot
// dotOne.addEventListener("click", () => {
//   slides[currentSlide].classList.remove("show-slide");
//   dots[currentSlide].classList.remove("show-dot");
//   slides[0].classList.add("show-slide");
//   dots[0].classList.add("show-dot");
// });

// // Second dot
// dotTwo.addEventListener("click", () => {
//   slides[currentSlide].classList.remove("show-slide");
//   dots[currentSlide].classList.remove("show-dot");
//   slides[1].classList.add("show-slide");
//   dots[1].classList.add("show-dot");
// });

// // Third dot
// dotThree.addEventListener("click", () => {
//   slides[currentSlide].classList.remove("show-slide");
//   dots[currentSlide].classList.remove("show-dot");
//   slides[2].classList.add("show-slide");
//   dots[2].classList.add("show-dot");
// });

// // Fourth dot
// dotFour.addEventListener("click", () => {
//   removeStyle(2);
// });

// function removeStyle(a) {
//   for (let i = 0; i < dots.length; i++) {
//     if (dots[i] !== a) {
//       slides[i].classList.remove("show-slide");
//       dots[i].classList.remove("show-dot");
//     } else {
//       slides[i].classList.add("show-slide");
//       dots[i].classList.add("show-dot");
//     }
//   }
// }
