let first = document.querySelector(".first");
let container = document.querySelector(".container");
//let second=

let printTag = function (event) {
  console.log(event.currentTarget); // this
  console.log(event.target);
  //   event.stopPropagation();   // забороняє вспливання

  if (
    event.target.classList.contains("content") ||
    event.target.classList.contains("second")
  ) {
    if (event.target.classList.contains("blue")) {
      event.target.classList.remove("blue");
    } else {
      event.target.classList.toggle("blue");
    }
  }
};

//console.log(first);

//   addEventListener(event, handler,  [options]);
//   addEventListener(event, handler, {once: true});

//   once : false по замовчуванню     або true
//   capture: false  / true
//   passive:  false / true
//

//first.addEventListener("click", printTag);

container.addEventListener("click", printTag);
