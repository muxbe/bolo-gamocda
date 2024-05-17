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

const descriptionProcents = document.querySelector(".description-procents");
/* const rect = descriptionProcents.getBoundingClientRect(); */

window.addEventListener("scroll", function () {
  htmlprocent.forEach((element) => {
    const rect = descriptionProcents.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("html-description-procent-border");
    } else {
      element.classList.remove("html-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
  cssprocent.forEach((element) => {
    const rect = descriptionProcents.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("css-description-procent-border");
    } else {
      element.classList.remove("css-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
  jsprocent.forEach((element) => {
    const rect = descriptionProcents.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.remove("description-procent-border-begin");
      element.classList.add("js-description-procent-border");
    } else {
      element.classList.remove("js-description-procent-border");
      element.classList.add("description-procent-border-begin");
    }
  });
  seoprocent.forEach((element) => {
    const rect = descriptionProcents.getBoundingClientRect();
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
/* function filterproects(e) {
  const proeects = document.querySelectorAll(".proects");

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
} */
filterSelection("all");
const btnContainer = document.getElementsByClassName("proects-buttons");
const btns = document.getElementsByClassName("filter-option");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("actual");
    current[0].className = current[0].className.replace(" actual", "");
    this.className += " actual";
  });
}

function filterSelection(c) {
  let x, i;
  x = document.querySelectorAll(".proects-text");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#user-email");
const userWeb = document.querySelector("#user-web");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#user-email-error");
const webError = document.querySelector("#user-web-error");
const mesage = document.querySelector("#message");
const messageError = document.querySelector("#user-message-error");
const inputs = document.querySelectorAll("input");
const formDiv = document.querySelector(".inputs-absolute");
const dialog = document.querySelector("dialog");
const formSpan = document.querySelector(".form-span");
function checkUserName() {
  if (nameInput.value.length <= 1 || nameInput.value.length > 15) {
    nameError.textContent = "min 1 charakter max 15";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");

    return false;
  }
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Username is required";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");
    return false;
  }
  if (!/^[a-zA-Z]*$/g.test(nameInput.value)) {
    nameError.textContent = "please write only letters";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
    nameInput.classList.add("correct");
    return true;
  }
}
function checkEmail() {
  if (emailInput.value === false) {
    emailError.textContent = "Please enter a valid email address";

    emailInput.classList.remove("correct");
    emailInput.classList.add("error");

    return false;
  }
  if (emailInput.validity.valid === false) {
    emailError.textContent = "Email is required";

    if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address";
    }
    emailInput.classList.remove("correct");
    emailInput.classList.add("error");

    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
    return true;
  }
}
function chekweb() {
  if (userWeb.value === "") {
    webError.textContent = "Username is required";
    userWeb.classList.remove("correct");
    userWeb.classList.add("error");
    return false;
  } else {
    webError.textContent = "";
    userWeb.classList.remove("error");
    userWeb.classList.add("correct");
    return true;
  }
}
function checkmessage() {
  if (mesage.value.length > 50) {
    messageError.textContent = "max 50 letter";
    mesage.classList.remove("correct");
    mesage.classList.add("error");
    return false;
  } else {
    messageError.textContent = "";
    mesage.classList.remove("error");
    return true;
  }
}
const user = {
  name: nameInput.value,
  email: emailInput.value,
  website: userWeb.value,
  message: mesage.value,
};
nameInput.addEventListener("input", checkUserName);

emailInput.addEventListener("input", checkEmail);
userWeb.addEventListener("input", chekweb);
mesage.addEventListener("input", checkmessage);
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData();

  formData.append("name", nameInput.value);
  formData.append("email", emailInput.value);
  formData.append("web", userWeb.value);
  formData.append("message", mesage.value);

  console.log(Array.from(formData));

  try {
    const res = await fetch("https://borjomi.loremipsum.ge/api/send-message", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });

    const resData = await res.json();

    if (data.status === 1) {
      form.classList.add("remove");
      dialog.classList.add("open");
    } else {
      console.error();
    }
  } catch (err) {
    console.log(err.message);
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUserNameValid = checkUserName();
  const isEmailValid = checkEmail();

  const isWebValid = chekweb();
  const ismessageValid = checkmessage();

  if (isUserNameValid && isEmailValid && isWebValid && ismessageValid) {
  } else {
    formSpan.textContent = "something wrong";
  }
});
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // do something ...

  // this line seems meaningless but you have to invoke it to avoid error.
  sendResponse({ damn: true });
});
