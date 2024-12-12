let mainTimeElement = document.getElementById("main-time");
let millisecondsElement = document.getElementById("milliseconds");
let statusElement = document.getElementById("status");

let startTime = 0;
let isRunning = false;
let holdStart = 0;
let holdTimeout = null;
let interval = null;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !isMenuOpen()) {
    if (!isRunning) {
      if (!holdStart) {
        holdStart = Date.now();
        statusElement.textContent = "Continue segurando para começar...";
        holdTimeout = setTimeout(() => {
          mainTimeElement.style.color = "green";
          statusElement.textContent = "Solte para iniciar o cronômetro!";
        }, holdTime);
      }
      e.preventDefault();
    }
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space" && !isMenuOpen()) {
    if (holdTimeout) {
      clearTimeout(holdTimeout);
      holdTimeout = null;
    }

    if (mainTimeElement.style.color === "green" && !isRunning) {
      startTimer();
    } else if (isRunning) {
      stopTimer();
    }

    resetState();
  }
});

function startTimer() {
  isRunning = true;
  startTime = Date.now();
  mainTimeElement.style.color = "white";
  statusElement.textContent = runningMessage;

  interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    updateTimer(elapsed);
  }, 10);
}

function stopTimer() {
  isRunning = false;
  clearInterval(interval);
  statusElement.textContent = `Cronômetro parado: ${mainTimeElement.textContent}.${millisecondsElement.textContent}`;
}

function resetState() {
  holdStart = 0;
  mainTimeElement.style.color = "white";
  statusElement.textContent = customMessage || "Segure a barra de espaço para iniciar";
}

function updateTimer(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10);

  let mainTime = minutes > 0 
    ? `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    : `${seconds.toString().padStart(1, "0")}`;

  mainTimeElement.textContent = mainTime;
  millisecondsElement.textContent = milliseconds.toString().padStart(2, "0");
}
