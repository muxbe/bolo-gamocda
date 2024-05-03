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
const htmlprocent = document.querySelectorAll("#html-procent-border");
const cssprocent = document.querySelectorAll("#css-procent-border");
const jsprocent = document.querySelectorAll("#js-procent-border");
const seoprocent = document.querySelectorAll("#seo-procent-border");

const descriptionProcents = document.querySelector(".description-pereent");
const rect = descriptionProcents.getBoundingClientRect();
console.log(rect.top);

/* const procentrect = descriptionProcents.getBoundingClientRect(); */
/*  descriptionProcents.onscroll = functi
on () {
  if (descriptionProcents.getBoundingClientRect().top < window.innerHeight) {
    htmlprocent.classList.remove("description-procent-border-begin");
    htmlprocent.classList.add("html-description-procent-border");
    console.log("hello");
  }
  if (window.getBoundingClientRect().top > window.innerHeight) {
    htmlprocent.classList.remove("html-description-procent-border");
    htmlprocent.classList.add("description-procent-border-begin");
    console.log("bay");
  } else {
  }
}; */

/*  function () {
   descriptionProcents.inViewport(
     function () {
       htmlprocent.addClass("html-description-procent-border");
     },
     function () {
       htmlprocent.removeClass("description-procent-border-begin");
     }
   );
 }; */
window.addEventListener("scroll", function () {
  htmlprocent.forEach((element) => {
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("html-description-procent-border");
    } else {
      element.classList.remove("html-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
});
window.addEventListener("scroll", function () {
  cssprocent.forEach((element) => {
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("css-description-procent-border");
    } else {
      element.classList.remove("css-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
});
window.addEventListener("scroll", function () {
  jsprocent.forEach((element) => {
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("js-description-procent-border");
    } else {
      element.classList.remove("js-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
});
window.addEventListener("scroll", function () {
  seoprocent.forEach((element) => {
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("seo-description-procent-border");
    } else {
      element.classList.remove("seo-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
});
