console.log("ZOBLIN JS LOADED");

document.addEventListener("DOMContentLoaded", () => {

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
    console.log("Missing elements:", { character, box, text });
    return;
  }

  character.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isTalking) return;

    isTalking = true;

    text.innerText = lines[currentLine];
    box.style.display = "block";

    if (currentLine < lines.length - 1) {
      currentLine++;
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === character) return;

    box.style.display = "none";
    isTalking = false;
  });

});