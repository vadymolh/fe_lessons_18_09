// Synchronous code
console.log("Action 1");
console.log("Action 2");
console.log("Action 3");

//Callback functions

const start = document.querySelector("#start-btn");
const stop = document.querySelector("#stop-btn");

console.log("Script have started");

let callback = function (event) {
  console.log("Async click!");
  //console.log(endVar);
};

//Async code
// start.addEventListener("click", callback);

// let endVar = "Some late Text";

// ------------------------------------------ Timers --------------------------
// Таймер виконання
// Виконує 1 раз передану функцію callback
//setTimeout(func|code, [delay], [arg1], [arg2], ...)

let idTimer = setTimeout(callback, 1000);

//Stop timeout event!
stop.addEventListener("click", () => {
  clearTimeout(idTimer);
  clearInterval(idInterval);
  console.log("Timer Stopped");
});

console.log("Script commands ended");

// Зациклене виконання з таймером

let idInterval = setInterval(callback, 1000);

// XHR request test
let showImageDOM = function (blob) {
  const urlObj = URL.createObjectURL(blob);
  const img = document.querySelector("#teamImg");
  img.src = urlObj; //"../fe_lessons_18_09/img/teamwork.png"
};

function xhrLoadImage(url, type, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = type;
  //console.log(xhr);
  xhr.onload = () => {
    console.log(xhr);
    callback(xhr.response);
  };
  xhr.send();
}
//showImageDOM();
xhrLoadImage("./img/teamwork.png", "blob", showImageDOM);
