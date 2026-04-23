/** TITLE SCREEN STUFF **/

document.getElementById("play").onclick = () => {
  startGame();
};

document.getElementById("credits").onclick = () => {
  showCredits();
};

function startGame() {
  console.log("Game starting...");
  // switch to first scene
}

function showCredits() {
  alert("Credits:\nshes working on it trust");
}

document.getElementById("play").onclick = () => {
  startTrainScene();
};

/** TITLE SCREEN STUFF **/

/** SCENE ONE TRAIN STUFF **/

function startTrainScene() {
  // Step 1: show initial scene
  document.getElementById("background_train_closed").src = "images/train_closed.png";

  // Step 2: wait a few seconds
  setTimeout(() => {
    openDoors();
  }, 3000); // 3 seconds
}

function openDoors() {
  // Step 3: switch background
  document.getElementById("background").src = "images/train_open.png";

  // Step 4: show continue button
  document.getElementById("continue").style.display = "block";
}

document.getElementById("continue").onclick = () => {
  loadScene("nextScene"); // your next scene system later
};

/** SCENE ONE TRAIN STUFF **/