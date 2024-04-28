const slides = document.querySelectorAll(".slider");
let currentSlide = 0;
/* setInterval(() => {
  for (let i = 0; i < 10; i++) {
    console.log("for");
  }
  console.log("for");
}, 2000);
 */
function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }

  loadSlides();
}
setInterval("goToNextSlide()", 10000);
