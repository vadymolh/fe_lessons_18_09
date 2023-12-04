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

let orderArray = Array.from(sliders);
let last = orderArray.length - 1;
let current = 0,
  order = 0;

function redoOrder(a) {
  for (let i = 0; i <= last; i++) {
    sliders[i].style.order = orderArray.indexOf(sliders[i]);
  }
}

function highlightCurrent() {
  slidesContent[current].classList.add("active-slide");
  points[current].classList.add("active-point");
}

function goRight() {
  reset();
  let previous = orderArray.shift();
  orderArray.push(previous);
  redoOrder(orderArray);
  if (current === last) {
    current = 0;
    highlightCurrent();
    return;
  }
  current++;
  highlightCurrent();
}

function goLeft() {
  reset();
  let previous = orderArray.pop();
  orderArray.unshift(previous);
  redoOrder(orderArray);
  if (current === 0) {
    current = last;
    highlightCurrent();
    return;
  }
  current--;
  highlightCurrent();
}

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
  arrowWhite.classList.toggle("hide");
  arrowRed.classList.toggle("hide");
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
    arrowLeft.style.background = "#fff";
    hideToggle(arrowRedLeft, arrowWhiteLeft);
  }
}

//-----------------------------------------------------
// function goLeft() {
//   reset();
//   let tmp = order - 1;
//   tmp = tmp.toString();
//   //sliders[current].style.order = tmp;
//   for (let i = 0; i < sliders.length; i++) {
//     console.log(sliders[i].style.order);
//     sliders[i].style.order = i.toString();
//   }
//   if (current === 0) {
//     sliders[current].style.order = sliders.length.toString();

//     current = sliders.length - 1;
//     sliders[current].style.order = tmp;
//     console.log(sliders.length - 1);
//     slidesContent[current].classList.add("active-slide");
//     points[current].classList.add("active-point");
//   } else {
//     current--;
//     sliders[current].style.order = "-1";
//     slidesContent[current].classList.add("active-slide");
//     points[current].classList.add("active-point");
//   }
// }

arrowLeft.addEventListener("click", goLeft);
arrowRight.addEventListener("click", goRight);

//Points LOGIC//////////////////////////////////////////

points_div.addEventListener("click", pointSlide);

function pointSlide(e) {
  let index = Array.from(points).indexOf(e.target);
  console.log(index);
  if (index == -1) {
    return;
  }
  reset();

  let tmp_slides = Array.from(sliders);
  if (index !== 0) {
    let tail = tmp_slides.splice(0, index);
    orderArray = [...tmp_slides, ...tail];
    console.log(orderArray);
  } else {
    orderArray = tmp_slides;
  }

  current = index;
  highlightCurrent();
  redoOrder(orderArray);
}
//----------------------------------------------
