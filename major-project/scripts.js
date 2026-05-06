/* --- OUTSIDE ZOBLIN TALKING --- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("ZOBLIN JS LOADED");

  const lines = [
    "Hey! First train, as usual?",
    "Well, head on inside. I heard the others chatting about you again."
  ];

  let currentLine = 0;

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

  box.style.display = "block";

  text.innerText = lines[currentLine];

  currentLine++;

  // reset if at end
  if (currentLine >= lines.length) {
    currentLine = 0;
  }

  // auto-close
  setTimeout(() => {
    box.style.display = "none";
  }, 4000);
});

});

/* --- OUTSIDE ZOBLIN TALKING --- */