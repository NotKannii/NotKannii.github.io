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

document.getElementById("play").onclick = () => {
  // hide title
  document.getElementById("title-screen").style.display = "none";

  // show first train scene
  document.getElementById("scene-one").style.display = "block";

  startTrainScene();
};

function startTrainScene() {
  const bg = document.getElementById("background_train_closed");

  bg.src = "images/background_train_closed";

  setTimeout(() => {
    openDoors();
  }, 3000);
}

function openDoors() {
  const bg = document.getElementById("background_train_open");

  bg.src = "images/background_train_open.PNG";

  document.getElementById("continue").style.display = "block";
}

function openDoors() {
  // hide closed version
  document.getElementById("scene-one").style.display = "none";

  // show open version
  document.getElementById("scene-one2").style.display = "block";

  // show continue button
  document.getElementById("continue_two").style.display = "block";
}

document.getElementById("continue").onclick = () => {
  console.log("Next scene coming soon...");
};