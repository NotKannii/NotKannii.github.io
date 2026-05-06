document.addEventListener("DOMContentLoaded", () => {

  let currentLines = [];
  let currentIndex = 0;

  const box = document.getElementById("dialogue_box");
  const text = document.getElementById("dialogue_text");

  box.style.display = "block"; // show
  box.style.display = "none";  // hide

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

  // Zoblin outside
  document.getElementById("zoblin_outside").addEventListener("click", (e) => {
    e.stopPropagation();
    startDialogue([
      "Hey! First train, as usual?",
      "Well, head on inside. I heard the others chatting about you again.",
      "Especially that Coblin kid. He thinks he’s so good in the lab.",
      "Ah, I guess he's there for a reason, no?",
      "Punch him for me? He still owes me for holding the trains for him."
    ]);
  });

  // boblin main1
  document.getElementById("main1_boblin").addEventListener("click", (e) => {
    e.stopPropagation();
    startDialogue([
      "Hey! First train, as usual?",
      "Well, head on inside. I heard the others chatting about you again.",
      "Especially that Coblin kid. He thinks he’s so good in the lab.",
      "Ah, I guess he's there for a reason, no?",
      "Punch him for me? He still owes me for holding the trains for him."
    ]);
  });

  // zoblin main1
  document.getElementById("main1_roblin").addEventListener("click", (e) => {
    e.stopPropagation();
    startDialogue([
      "Hey! First train, as usual?",
      "Well, head on inside. I heard the others chatting about you again.",
      "Especially that Coblin kid. He thinks he’s so good in the lab.",
      "Ah, I guess he's there for a reason, no?",
      "Punch him for me? He still owes me for holding the trains for him."
    ]);
  });

  // Click anywhere
  document.addEventListener("click", () => {
    if (box.style.display === "block") {
      advanceDialogue();
    }
  });

});