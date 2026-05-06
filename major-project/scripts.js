document.addEventListener("DOMContentLoaded", () => {

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

  // OUTSIDE //

  const zoblin = document.getElementById("zoblin_outside");

  if (zoblin) {
    zoblin.addEventListener("click", (e) => {
      e.stopPropagation();

      startDialogue([
        "Hey! First train, as usual?",
        "Well, head on inside. I heard the others chatting about you again.",
        "Especially that Coblin kid. He thinks he’s so good in the lab.",
        "Ah, I guess he's there for a reason, no?",
        "Punch him for me? He still owes me for holding the trains for him."
      ]);
    });
  }

  // MAIN 1 //

  const roblin = document.getElementById("main1_roblin");

  if (roblin) {
    roblin.addEventListener("click", (e) => {
      e.stopPropagation();

      startDialogue([
        "Hey! First train, as usual?",
        "Well, head on inside. I heard the others chatting about you again.",
        "Especially that Coblin kid. He thinks he’s so good in the lab.",
        "Ah, I guess he's there for a reason, no?",
        "Punch him for me? He still owes me for holding the trains for him."
      ]);
    });
  }

  const boblin = document.getElementById("main1_boblin");

  if (boblin) {
    boblin.addEventListener("click", (e) => {
      e.stopPropagation();

      startDialogue([
        "Hey! First train, as usual?",
        "Well, head on inside. I heard the others chatting about you again.",
        "Especially that Coblin kid. He thinks he’s so good in the lab.",
        "Ah, I guess he's there for a reason, no?",
        "Punch him for me? He still owes me for holding the trains for him."
      ]);
    });
  }

  // LAB 1 //

  const coblin = document.getElementById("lab1_coblin");

  if (coblin) {
    coblin.addEventListener("click", (e) => {
      e.stopPropagation();

      startDialogue([
        "Hey! First train, as usual?",
        "Well, head on inside. I heard the others chatting about you again.",
        "Especially that Coblin kid. He thinks he’s so good in the lab.",
        "Ah, I guess he's there for a reason, no?",
        "Punch him for me? He still owes me for holding the trains for him."
      ]);
    });
  }

  const car = document.getElementById("lab1_car");

  if (car) {
    car.addEventListener("click", (e) => {
      e.stopPropagation();

      startDialogue([
        "Hey! First train, as usual?",
        "Well, head on inside. I heard the others chatting about you again.",
        "Especially that Coblin kid. He thinks he’s so good in the lab.",
        "Ah, I guess he's there for a reason, no?",
        "Punch him for me? He still owes me for holding the trains for him."
      ]);
    });
  }

  // HOLDING 1 //

  // HOLDING 2 //

  // LAB 2 //

  // MAIN 2 //

  // BAL 1 //

  // BAL 2 //


  document.addEventListener("click", (e) => {
    if (box.style.display !== "block") return;

    // prevent clicking characters from double-triggering
    if (e.target.closest("#zoblin_outside")) return;

    advanceDialogue();
  });

});

// TEMPLATE //

/* ---------- TMEPLATEEEEE REPLACE "NAME" AND "ID"

const NAME = document.getElementById("ID");

  if (NAME) {
    NAME.addEventListener("click", (e) => {
      e.stopPropagation();

      startDialogue([
        "Hey! First train, as usual?",
        "Well, head on inside. I heard the others chatting about you again.",
        "Especially that Coblin kid. He thinks he’s so good in the lab.",
        "Ah, I guess he's there for a reason, no?",
        "Punch him for me? He still owes me for holding the trains for him."
      ]);
    });
  }

 ---------- */