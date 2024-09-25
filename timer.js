let pomodoroBtn = document.querySelector("#pomodoro");
let shortBreakBtn = document.querySelector("#short-break");
let longBreakBtn = document.querySelector("#long-break");
let timeDisplay = document.querySelector(".time");
let startBtn = document.querySelector(".main__button-start");
import { PomodoroTime, shortBreakTime, longBreakTime } from "./main";

let timerId = null;
let minutes = 60,
  seconds = 0;

function timer() {
  if (seconds == 0) {
    minutes--;
    seconds = 60;
  } else seconds--;

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timeDisplay.textContent = `${m}:${s}`;
  if (minutes == 0 && seconds == 0) {
    category(shortBreakBtn, shortBreakTime);
    category(longBreakBtn, longBreakTime);
    category(pomodoroBtn, PomodoroTime);
  }
}

function resetTime() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timeDisplay.textContent = `${m}:${s}`;
}

function addActiveClass(e) {
  pomodoroBtn.classList.remove("active");
  shortBreakBtn.classList.remove("active");
  longBreakBtn.classList.remove("active");
  e.classList.add("active");
}

function category(timeType, m) {
  if (timerId != null) {
    clearInterval(timerId);
    startBtn.textContent = "Start";
    timerId = null;
  }
  minutes = m;
  seconds = 0;
  resetTime();
  addActiveClass(timeType);
}

export function initTime() {
  category(shortBreakBtn, shortBreakTime);
  category(longBreakBtn, longBreakTime);
  category(pomodoroBtn, PomodoroTime);
}

pomodoroBtn.addEventListener("click", () => {
  category(pomodoroBtn, PomodoroTime);
});

shortBreakBtn.addEventListener("click", () => {
  category(shortBreakBtn, shortBreakTime);
});

longBreakBtn.addEventListener("click", () => {
  category(longBreakBtn, longBreakTime);
});

startBtn.addEventListener("click", () => {
  startBtn.textContent = "Pause";

  if (timerId != null) {
    clearInterval(timerId);
    startBtn.textContent = "Start";
    return;
  }
  timerId = setInterval(timer, 1000);
});


