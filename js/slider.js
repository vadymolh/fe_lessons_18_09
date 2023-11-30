let sliders = document.querySelectorAll(".slide");
let slidesContent = document.querySelectorAll(".slider-content");

let points_div = document.querySelector(".points");
let points = document.querySelectorAll(".point");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");

//--------------------------------------------
let arrowRedLeft = document.querySelector(".arrow-red-left");
let arrowWhiteLeft = document.querySelector(".arrow-white-left");
let arrowRedRight = document.querySelector(".arrow-red-right");
let arrowWhiteRight = document.querySelector(".arrow-white-right");
//---------------------------------------------

let current = 0,
  order = 0;

function reset() {
  for (let i = 0; i < sliders.length; i++) {
    points[i].classList.remove("active-point");
    slidesContent[i].classList.remove("active-slide");
  }
}

function initSlider() {
  reset();
  points[current].classList.add("active-point");
  slidesContent[current].classList.add("active-slide");
}

initSlider();

//------------------------ Arrows control----------------

arrowRight.addEventListener("mouseover", overRightArrow);
arrowRight.addEventListener("mouseout", outRightArrow);
arrowLeft.addEventListener("mouseover", overLeftArrow);
arrowLeft.addEventListener("mouseout", outLeftArrow);

function hideToggle(arrowRed, arrowWhite) {
  arrowWhite.classList.toggle = "hide";
  arrowRed.classList.toggle = "hide";
}

function overRightArrow(e) {
  if ((e.target.tagName = "img")) {
    arrowRight.style.background = "#f53838";
    hideToggle(arrowRedRight, arrowWhiteRight);
  }
}

function overLeftArrow(e) {
  if ((e.target.tagName = "img")) {
    arrowLeft.style.background = "#f53838";
    hideToggle(arrowRedLeft, arrowWhiteLeft);
  }
}

function outRightArrow(e) {
  if ((e.target.tagName = "img")) {
    arrowRight.style.background = "#fff";
    hideToggle(arrowRedRight, arrowWhiteRight);
  }
}

function outLeftArrow(e) {
  if ((e.target.tagName = "img")) {
    arrowRight.style.background = "#fff";
    hideToggle(arrowRedLeft, arrowWhiteLeft);
  }
}

//-----------------------------------------------------
function goLeft() {
  reset();
  let tmp = order - 1;
  tmp = tmp.toString();
  sliders[current].style.order = tmp;
  if (current == 0) {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].style.order = "1";
    }
    current = 1;
    slidesContent[current].classList.add("active-slide");
    points[current].classList.add("active-point");
  } else {
    current--;
    slidesContent[current].classList.add("active-slide");
    points[current].classList.add("active-point");
  }
}

arrowLeft.addEventListener("click", goLeft);

//Points LOGIC//////////////////////////////////////////

points_div.addEventListener("click", pointSlide);

function pointSlide(e) {
  let index = Array.from(points).indexOf(e.target);
  console.log(index);
  if (index == -1) {
    return;
  }
  reset();
  points[index].classList.add("active-point");
  for (let i = 0; i < sliders.length; i++) {
    if (i === index) {
      slidesContent[i].classList.add("active-slide");
      sliders[i].style.order = order.toString();
    } else if (i > index) {
      sliders[i].style.order = order.toString();
    } else {
      sliders[i].style.order = order.toString() + 1;
    }
  }
}
//----------------------------------------------
