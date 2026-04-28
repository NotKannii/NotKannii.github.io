document.addEventListener("DOMContentLoaded", () => {
  console.log("ZOBLIN JS LOADED");

  const lines = ["palcholder.", "plavcerholder"];
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

    if (isTalking) return;
    isTalking = true;

    text.innerText = lines[currentLine];
    box.style.display = "block";

    if (currentLine < lines.length - 1) currentLine++;
  });

  document.addEventListener("click", () => {
    if (!isTalking) return;

    box.style.display = "none";
    isTalking = false;
  });
});