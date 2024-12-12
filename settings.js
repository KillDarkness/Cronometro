const settingsMenu = document.getElementById("settings-menu");
const toggleMilliseconds = document.getElementById("toggle-milliseconds");
const holdTimeInput = document.getElementById("hold-time");
const customMessageInput = document.getElementById("custom-message");
const runningMessageInput = document.getElementById("running-message");
const closeMenuButton = document.getElementById("close-menu");

let showMilliseconds = true;
let holdTime = 1 * 1000; // Tempo para segurar em milissegundos
let customMessage = "Segure a barra de espaço para iniciar";
let runningMessage = "Cronômetro rodando...";

// Abre o menu ao pressionar "K"
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyK") {
    settingsMenu.classList.remove("hidden");
  }
});

// Fecha o menu
closeMenuButton.addEventListener("click", () => {
  settingsMenu.classList.add("hidden");
  updateSettings();
});

// Atualiza configurações ao fechar o menu
function updateSettings() {
  showMilliseconds = toggleMilliseconds.checked;
  holdTime = parseFloat(holdTimeInput.value) * 1000;
  customMessage = customMessageInput.value;
  runningMessage = runningMessageInput.value;

  // Atualiza elementos
  statusElement.textContent = customMessage;
  millisecondsElement.style.display = showMilliseconds ? "inline" : "none";
}

// Verifica se o menu está aberto
function isMenuOpen() {
  return !settingsMenu.classList.contains("hidden");
}
