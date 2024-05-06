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
let slide = document.getElementsByClassName("mtavari");
let navlinks = document.querySelectorAll(".nav-click");
let currenTSlide = 0;

function changeSlide(moveTo) {
  if (moveTo >= slide.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slide[currenTSlide].classList.toggle("activ");
  navlinks[currenTSlide].classList.toggle("activ");
  slide[moveTo].classList.toggle("activ");
  navlinks[moveTo].classList.toggle("activ");

  currenTSlide = moveTo;
}

document.querySelectorAll(".nav-click").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currenTSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});
const proectButtons = document.querySelectorAll(".filter-option");
const currentButton = 0;
function filterproects(e) {
  const proeects = document.querySelectorAll(".proect-lines div");

  let filter = e.target.dataset.filter;
  proeects.forEach((proect) => {
    proect.classList.contains(filter)
      ? proect.classList.remove("hidden")
      : proect.classList.add("hidden");

    if (filter === "*") {
      proeects.forEach((proect) => proect.classList.remove("hidden"));
    }
  });
}
function filterproects(e) {
  const proeects = document.querySelectorAll(".proect-lines div");
  let filter = e.target.dataset.filter;
  if (filter === "*") {
    proeects.forEach((proect) => proect.classList.remove("hidden"));
  } else {
    proeects.forEach((proect) => {
      proect.classList.contains(filter)
        ? proect.classList.remove("hidden")
        : proect.classList.add("hidden");
    });
  }
}
