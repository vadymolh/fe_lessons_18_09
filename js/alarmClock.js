const selectAlarm = document.querySelectorAll("select");
//console.log(selectAlarm);

const currentTime = document.querySelector("#current-time");
//console.log(currentTime);
const clockSettings = document.querySelector(".clock-settings");
const btnAlarm = document.querySelector("#btn-alarm");

// div = document.querySelector(".progress");
// console.dir(div);
//div.style.width = "10%";

let halfDay = "AM";

//-------------------------------- Alarm Sound Object-------------------------
let alarmTime = "";
let ring = new Audio("./files/ring.mp3");
let isAlarm = false;
// ------------checkAlarm function -------------------------------------

function checkAlarm(hour, min) {
  if (alarmTime == `${hour}:${min} ${halfDay}`) {
    console.log("Alarm!!!");
    ring.play();
    ring.loop = true;
  }
}

//------------------------------------AlarmClock Interval---------------------

setInterval(() => {
  let timeClock = new Date();
  let hour = timeClock.getHours();
  let min = timeClock.getMinutes();
  let s = timeClock.getSeconds();

  if (hour > 12) {
    hour -= 12;
    halfDay = "PM";
  }

  hour = hour == 0 ? (hour = 12) : hour;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  s = s < 10 ? "0" + s : s;

  currentTime.innerText = `${hour}:${min}:${s} ${halfDay}`;
  checkAlarm(hour, min);
}, 1000);

// -------------------Alarm SET-------------------------------

function setAlarm() {
  if (isAlarm) {
    alarmTime = "";
    ring.pause();
    btnAlarm.innerText = "Встановити будильник";
    return (isAlarm = false);
  }
  let hour = selectAlarm[0].value,
    min = selectAlarm[1].value;
  half = selectAlarm[2].value;
  let time = `${hour}:${min} ${half}`;

  alarmTime = time; // Бракувало цього рядка!!!
  btnAlarm.innerText = "Скасувати будильник";
  isAlarm = true;
}
//------------------------------------------------------

btnAlarm.addEventListener("click", setAlarm);

// ------------- GENERATE OPTIONS ---------------------------------------
//Hours
for (let i = 0; i <= 12; i++) {
  i = i < 10 ? "0" + i : i;
  let option = document.createElement("option", { value: i });
  option.textContent = i;
  selectAlarm[0].firstElementChild.insertAdjacentElement("beforebegin", option);
}

//Minutes
for (let i = 0; i <= 59; i++) {
  i = i < 10 ? "0" + i : i;
  let option = document.createElement("option", { value: i });
  option.textContent = i;
  selectAlarm[1].firstElementChild.insertAdjacentElement("beforebegin", option);
}
