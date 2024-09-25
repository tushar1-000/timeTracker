import "./style.css";
import "./streaks";
// import startTimer from "./timer";
import { initTime } from "./timer";
import confetti from "canvas-confetti";
let settingBtn = document.querySelector("#setting");
let taskCompletedBtn = document.getElementById("task-completed");
let PomodoroTime = 60,
  shortBreakTime = 5,
  longBreakTime = 15;

settingBtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("overlay");
  div.innerHTML = `<div class="modal">
        <div class="modal__headings">
          <h1 >Enter time of your choice :)</h1>
          <p>All the time will be in minutes</p>
        </div>
        <div class="modal_content">
          <div class="modal__input">
            <span>Pomodoro</span> <input type="number" id="pomoInput" value = ${PomodoroTime} />
          </div>
          <div class="modal__input">
            <span>ShorT Break</span> <input type="number" id="shortInput" value = ${shortBreakTime} />
          </div>
          <div class="modal__input">
            <span>Long Break</span><input type="number" id="longInput" value = ${longBreakTime} />
          </div>
        </div>
        <div class="modal__button">
          <button id="save">Save</button>
        </div>
      </div>`;
  document.body.append(div);
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      div.remove();
    }
  });
  let saveBtn = document.querySelector("#save");

  saveBtn.addEventListener("click", () => {
    let pomoInput = document.querySelector("#pomoInput");
    let shortInput = document.querySelector("#shortInput");
    let longInput = document.querySelector("#longInput");
    if (
      pomoInput.value == "" ||
      shortInput.value == "" ||
      longInput.value == ""
    ) {
      alert("Please add all values");
    } else {
      PomodoroTime = pomoInput.value;
      shortBreakTime = shortInput.value;
      longBreakTime = longInput.value;
      div.remove();

      initTime();
    }
  });
});


export { PomodoroTime, shortBreakTime, longBreakTime };
