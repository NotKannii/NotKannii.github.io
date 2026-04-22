document.getElementById("play").onclick = () => {
  startGame();
};

document.getElementById("credits").onclick = () => {
  showCredits();
};

function startGame() {
  console.log("Game starting...");
  // Later: switch to first scene
}

function showCredits() {
  alert("Credits:\nYou made this 😤");
}