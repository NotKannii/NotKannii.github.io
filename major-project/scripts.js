const lines = [
  "Oh... you actually showed up.",
  "I wasn’t sure you would.",
  "Well... the door’s right there."
];

let currentLine = 0;
let isTalking = false;

const character = document.getElementById("zoblin_outside");
const box = document.getElementById("zoblin_outside_dialouge_box");
const text = document.getElementById("zoblin_outside_dialouge_text");

// trigger dialouge
character.onclick = () => {
  if (isTalking) return;

  isTalking = true;

  text.innerText = lines[currentLine];
  box.style.display = "block";

  // repeat, stop at lats line
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