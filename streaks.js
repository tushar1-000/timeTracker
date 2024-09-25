import confetti from "canvas-confetti";
let taskCompletedBtn = document.getElementById("task-completed");
let streakNumber = document.getElementById("streak-number");

function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

function updateStreak() {
  const currentDate = getCurrentDate();
  const lastActiveDate = localStorage.getItem("lastActiveDate");
  let streak = parseInt(localStorage.getItem("streak")) || 0;

  if (lastActiveDate) {
    const lastDate = new Date(lastActiveDate);
    const diffTime = Math.abs(new Date(currentDate) - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays == 1) streak++;
    else if (diffDays > 1) streak = 1;
  } else streak = 1;
  localStorage.setItem("lastActiveDate", currentDate);
  localStorage.setItem("streak", streak);
  console.log(streakNumber);

  streakNumber.innerText = streak;
}

let buttonCompleted = document.getElementById("task-completed");
buttonCompleted.addEventListener("click", () => {
  updateStreak();
});

window.onload = function () {
  const streak = localStorage.getItem("streak") || 0;
};

taskCompletedBtn.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    startVelocity: 20,
    spread: 360,
    origin: {
      // x: 555,
      // since they fall down, start a bit higher than random
      y: 0.4,
    },
  });
  updateStreak();
});
