function createDialogue(characterId, boxId, textId, lines, duration = 10000) {
  let currentLines = [];
  let currentIndex = 0;

  const box = document.getElementById("dialogue_box");
  const text = document.getElementById("dialogue_text");

  function startDialogue(lines) {
    currentLines = lines;
    currentIndex = 0;

    box.style.display = "block";
    text.innerText = currentLines[currentIndex];
  }

  function advanceDialogue() {
    currentIndex++;

    if (currentIndex >= currentLines.length) {
      box.style.display = "none";
      return;
    }

    text.innerText = currentLines[currentIndex];
  }
}

/* --- Dialouge --- */

document.getElementById("zoblin_outside").addEventListener("click", () => {
  startDialogue([
    "Hey! First train, as usual?",
    "Well, head on inside. I heard the others chatting about you again.",
    "Especially that Coblin kid. He thinks he’s so good in the lab.",
    "Ah, I guess he's there for a reason, no?",
    "Punch him for me? He still owes me for holding the trains for him."
  ]);

  /* --- TEMPLATE
  
    createDialogue(
      "lab_scientist",
      "lab_scientist_box",
      "lab_scientist_text",
      [
        "This lab isn’t supposed to be accessed yet...",
        "But since you're here, be careful what you touch."
      ]
    );
  
  TEMPLATE --- */

});