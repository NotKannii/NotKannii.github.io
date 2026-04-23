document.getElementById("play").onclick = () => {
  document.getElementById("title-screen").style.display = "none";
  document.getElementById("scene-one").style.display = "block";

  startTrainScene();
};

document.getElementById("credits").onclick = () => {
  alert("Credits:\nshes working on it trust");
};

function startTrainScene() {
  const bg = document.getElementById("background_train_closed");

  bg.src = "images/background_train_closed.png";

  setTimeout(() => {
    openDoors();
  }, 5000);
}

function openDoors() {
  document.getElementById("scene-one").style.display = "none";
  document.getElementById("scene-one2").style.display = "block";
  document.getElementById("continue_two").style.display = "block";
}

document.getElementById("continue_two").onclick = () => {
  console.log("Next scene coming soon...");
};