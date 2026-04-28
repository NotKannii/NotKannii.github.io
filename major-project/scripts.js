const lines = [
  "palcholder.",
  "plavcerholder"
];

let currentLine = 0;
let isTalking = false;

const character = document.getElementById("zoblin_outside");
const box = document.getElementById("zoblin_outside_dialouge_box");
const text = document.getElementById("zoblin_outside_dialouge_text");

// trigger dialogue
character.onclick = (e) => {
  e.stopPropagation();

  if (isTalking) return;

  isTalking = true;

  text.innerText = lines[currentLine];
  box.style.display = "block";

  if (currentLine < lines.length - 1) {
    currentLine++;
  }
};

// close dialogue
document.onclick = () => {
  if (!isTalking) return;

  box.style.display = "none";
  isTalking = false;
};