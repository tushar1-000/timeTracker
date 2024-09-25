import confetti from "canvas-confetti";
let taskCompletedBtn = document.getElementById("task-completed");
let streakNumber = document.getElementById("streak-number");
let showConfetti = false;

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

    if (diffDays == 1) {
      streak++;
      showConfetti = true;
    } else if (diffDays > 1) {
      streak = 1;
      showConfetti = true;
    }
  } else {
    streak = 1;
    showConfetti = true;
  }
  localStorage.setItem("lastActiveDate", currentDate);
  localStorage.setItem("streak", streak);

  streakNumber.innerText = streak;
}

let buttonCompleted = document.getElementById("task-completed");
buttonCompleted.addEventListener("click", () => {
  updateStreak();
});

window.onload = function () {
  const streak = localStorage.getItem("streak") || 0;
  streakNumber.innerText = streak;
};

taskCompletedBtn.addEventListener("click", () => {
  updateStreak();
  if (showConfetti) {
    confetti({
      particleCount: 100,
      startVelocity: 20,
      spread: 360,
      origin: {
        y: 0.4,
      },
    });
    showConfetti = false;
  }
});
