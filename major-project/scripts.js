// TITLE SCREEN

document.getElementById("play").onclick = () => {
  startTrainScene();
};

document.getElementById("credits").onclick = () => {
  showCredits();
};

function showCredits() {
  alert("Credits:\nshes working on it trust");
}


// TRAIN SCENE

function startTrainScene() {
  const bg = document.getElementById("background");

  bg.src = "images/train_closed.png";

  setTimeout(() => {
    openDoors();
  }, 3000);
}

function openDoors() {
  const bg = document.getElementById("background");

  bg.src = "images/train_open.png";

  document.getElementById("continue").style.display = "block";
}

document.getElementById("continue").onclick = () => {
  console.log("Next scene coming soon...");
};