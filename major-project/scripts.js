document.addEventListener("DOMContentLoaded", () => {
  console.log("ZOBLIN JS LOADED");

  const lines = [
    "palcholder.",
    "plavcerholder"
  ];

  let currentLine = 0;
  let isTalking = false;

  const character = document.getElementById("zoblin_outside");
  const box = document.getElementById("zoblin_outside_dialogue_box");
  const text = document.getElementById("zoblin_outside_dialogue_text");

  if (!character || !box || !text) {
    console.log("Missing elements");
    return;
  }

  character.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("ZOBLIN CLICKED");

  // show box if hidden
  box.style.display = "block";

  // show current line
  text.innerText = lines[currentLine];

  // move to next line
  currentLine++;

  // if we reached the end, reset after showing last line
  if (currentLine >= lines.length) {
    currentLine = 0;
    isTalking = false;
  } else {
    isTalking = true;
  }
});

  document.addEventListener("click", () => {
    if (!isTalking) return;

    box.style.display = "none";
    isTalking = false;
  });

box.style.display = "block";
box.style.background = "red";
box.style.zIndex = "9999";

});