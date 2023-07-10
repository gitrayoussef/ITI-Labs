const days = document.querySelectorAll("#days li");
const showHours = document.getElementById("show-hours");
const showMinutes = document.getElementById("show-minutes");
const showSeconds = document.getElementById("show-seconds");
const dayNight = document.getElementById("day-night");
const dateNow = new Date();
let today = dateNow.getDay();
let setHours = document.getElementById("set-hours");
let setMinutes = document.getElementById("set-minutes");
let setSeconds = document.getElementById("set-seconds");
const setButton = document.getElementById("set");
const clearButton = document.getElementById("set");
let hoursNow;
let minutesNow;
let secondsNow;
let targetTime;

//Digital-Clock-Program

setInterval(getTimeNow, 1000);

selectDay(parseDayNum);

setButton.addEventListener("click", function (e) {
  e.preventDefault();
  targetTime = adjustAlarm();
  if(targetTime) alert(`Alarm is set to ${targetTime[0]} :${targetTime[1]} :${targetTime[2]}`)
  setHours.value = 0
  setMinutes.value = 0
  setSeconds.value = 0
});

//Digital-Clock-Functions

function getTimeNow() {
  const dateNow = new Date();
  hoursNow = dateNow.getHours();
  minutesNow = dateNow.getMinutes() ;
  secondsNow = dateNow.getSeconds();
  showHours.innerHTML = (hoursNow.toString().length === 2) ? hoursNow.toString() : '0' + hoursNow.toString();
  showMinutes.innerHTML = (minutesNow.toString().length === 2) ? minutesNow.toString() : '0' + minutesNow.toString();
  showSeconds.innerHTML = (secondsNow.toString().length === 2) ? secondsNow.toString() : '0' + secondsNow.toString();
  hoursNow > 12 ? dayNight.innerHTML = "PM" : dayNight.innerHTML = "AM";
  if (targetTime) {
    alram(targetTime);
  }
}

function parseDayNum() {
  switch (today) {
    case 0:
      today = "SUN";
      break;

    case 1:
      today = "MON";
      break;
    case 2:
      today = "TUE";
      break;
    case 3:
      today = "WED";
      break;
    case 4:
      today = "THU";
      break;
    case 5:
      today = "FRI";
      break;
    case 6:
      today = "SAT";
      break;
    default:
      console.log("ERROR");
      break;
  }
}

function selectDay(parseDayNum) {
  parseDayNum();
  for (const day of days) {
    if (day.innerHTML === today) {
      day.classList.add("selected");
    }
  }
}


function adjustAlarm() {
  const usersHoursInput = parseInt(setHours.value);
  const usersMinutesInput = parseInt(setMinutes.value);
  const usersSecondsInput = parseInt(setSeconds.value);
  let requiredAlarmHour =
    hoursNow + usersHoursInput < 23
      ? hoursNow + usersHoursInput
      : alert("Enter a Valid NUmber!");
  let requiredAlarmMinutes =
    minutesNow + usersMinutesInput < 60
      ? minutesNow + usersMinutesInput
      : alert("Enter a Valid NUmber!");
  let requiredAlarmSeconds =
    secondsNow + usersSecondsInput < 60
      ? secondsNow + usersSecondsInput
      : alert("Enter a Valid NUmber!");
  return [requiredAlarmHour, requiredAlarmMinutes, requiredAlarmSeconds];
}

function alram(targetTime) {
  const audio = new Audio("./mixkit-retro-game-emergency-alarm-1000.wav");
  if (
    hoursNow === targetTime[0] &&
    minutesNow === targetTime[1] &&
    secondsNow === targetTime[2]
  ) {
    audio.play();
  } else {
    console.log("No required time yet");
  }
}
