document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     DIALOGUE SYSTEM
  ======================= */

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

  /* =======================
     OUTSIDE / MAIN / LAB CHARACTERS
  ======================= */

  const zoblin = document.getElementById("zoblin_outside");
  if (zoblin) {
    zoblin.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Hey! First train, as usual, but you ain't beating me.",
        "Head inside, they've been talking about you all morning.",
        "Especially that Coblin kid, something about the higher ups.",
        "Even though it's his day today, punch him for me."]);
    });
  }

  const roblin = document.getElementById("main1_roblin");
  if (roblin) {
    roblin.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Good morning.",
        "Is there something you need?",
        "...",
        "Higher ups said no entry here. Not sure why though.",
        "You don't even know? Huh...",
        "Maybe go ask the big 23-year-old in the lab."]);
    });
  }

  const boblin = document.getElementById("main1_boblin");
  if (boblin) {
    boblin.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Good morning!",
        "Best morning! It's 1/8 today!",
        "...",
        "Ahem, excuse me, him and I were out lastnight.",
        "You should probably head in, already! He's been yelling nonstop in there.",
        "Poor lab kitty..."]);
    });
  }

  const coblin = document.getElementById("lab1_coblin");
  if (coblin) {
    coblin.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Oh, good morning, Ms.",
        "*He looks distraught*",
        "Sorry, these tests have been driving me insane.",
        "It's not looking good. Plus, systems are acting up.",
        "HighU' wants results today. I hooked it up already, but can you check?",
        "Thankssssssssssss!"
      ]);
    });
  }

  const car = document.getElementById("lab1_car");
  if (car) {
    car.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["eow",
        "*Why do you keep this cat around?*",
        "*It stares. A little too long.*",
        "*Maybe that's why.*"
      ]);
    });
  }

  /* =======================
     BAAADDD : HOLDING 1 / LAB2 / MAIN2 / BAL 1 CHARACTERS
  ======================= */

  const badheld = document.getElementById("holding1_held");
  if (badheld) {
    badheld.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["eow",
        "*Why do you keep this cat around?*",
        "*It stares. A little too long.*",
        "*Maybe that's why.*"
      ]);
    });
  }

/* =======================
     GUUUUD : HOLDING 2 / BAL 2 CHARACTERS
  ======================= */

  const goodheld = document.getElementById("holding2_held");
  if (goodheld) {
    goodheld.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["RUFURUFRURF",
        "*Why do you keep this cat around?*",
        "*It stares. A little too long.*",
        "*Maybe that's why.*"
      ]);
    });
  }

  /* =======================
     LAB 1 CODE SYSTEM (FIXED)
  ======================= */

  const input = document.getElementById("lab1_input");
  const button = document.getElementById("submit_code");
  const feedback = document.getElementById("lab1_feedback");

  if (input && button && feedback) {

    let attempts = 0;
    const maxAttempts = 3;
    const correctCode = "COBLIN1823";

    button.addEventListener("click", () => {

      const value = input.value.trim().toUpperCase();

      if (value === correctCode) {
        localStorage.setItem("lab1_correct", "true");

        feedback.innerText = "ACCESS GRANTED. ENTER NOW.";

        setTimeout(() => {
          window.location.href = "holding1.html";
        }, 2000);

        return;
      }

      attempts++;

      if (attempts >= maxAttempts) {
        localStorage.setItem("lab1_correct", "false");

        feedback.innerText = "SYSTEM LOCKED";
        button.disabled = true;
        input.disabled = true;

      } else {
        feedback.innerText = `INCORRECT (${attempts}/3)`;
      }
    });
  }

  /* =======================
     HOLDING 1 CHECK
  ======================= */

  const isCorrect = localStorage.getItem("lab1_correct") === "true";
  const releaseBtn = document.getElementById("release_btn");

  if (releaseBtn) {
    releaseBtn.style.display = isCorrect ? "block" : "none";
  }

  document.addEventListener("DOMContentLoaded", () => {

  const isCorrect = localStorage.getItem("lab1_correct") === "true";

  const choice1 = document.getElementById("choice1");
  const choice2 = document.getElementById("choice2");
  const choice3 = document.getElementById("choice3");

  if (!choice1 || !choice2 || !choice3) return;

  let seen1 = false;
  let seen2 = false;

  function checkUnlock() {
    if (!isCorrect) return;

    if (seen1 && seen2) {
      choice3.style.display = "block";
    }
  }

  choice1.addEventListener("click", () => {
    seen1 = true;
    localStorage.setItem("holding1_lore1_seen", "true");

    // your dialogue system here
    startDialogue([
      "This place used to process incoming trains...",
      "Now it's something else."
    ]);

    checkUnlock();
  });

  choice2.addEventListener("click", () => {
    seen2 = true;
    localStorage.setItem("holding1_lore2_seen", "true");

    startDialogue([
      "They say no one leaves this wing unchanged...",
      "I don't know if that's true."
    ]);

    checkUnlock();
  });

  choice3.addEventListener("click", () => {
    // unlock good route
    window.location.href = "holding2.html";
  });

});

  /* =======================
     CLICK TO ADVANCE DIALOGUE
  ======================= */

  document.addEventListener("click", (e) => {
    if (box.style.display !== "block") return;

    if (e.target.closest("#zoblin_outside")) return;

    advanceDialogue();
  });

});