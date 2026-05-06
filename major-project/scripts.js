document.addEventListener("DOMContentLoaded", () => {

  let autoRedirect = null;

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

    autoRedirect = redirect;

    box.style.display = "block";
    text.innerText = currentLines[currentIndex];
  }

 function advanceDialogue() {
  currentIndex++;

  if (currentIndex >= currentLines.length) {
    box.style.display = "none";

    // bal 2
    if (autoRedirect) {
      window.location.href = autoRedirect;
      autoRedirect = null;
    }

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
      startDialogue(["Ah, what a sight seeing you here.",
        "*What is THAT*",
        "I take it you're here to observe. Like the rest of them.",
        "Make it quick.",
        "*This subject was not in your records. When did it get here?*",
        "*Better ask Coblin.*",
        "'Better ask Coblin?' I was really hoping you were different, I was wrong",
        "Oh, well, it's already here. Your systems felt it.",
        "Bringing me here was one thing. Keeping me? I am a beacon.",
        "A beacon for the beings above.",
        "It's here. It will not wait much longer.",
        "I wonder who it is this time..."
      ]);
    });
  }

    const car2 = document.getElementById("lab2_car");
  if (car2) {
    car2.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Tell me, Astrope.",
        "*That is NOT cat.*",
        "Have you made the right choice?",
        "*The cat's gaze pierces your soul. Pondering.*",
        "*Did you make the right choice?*"
      ]);
    });
  }

    const oblins = document.getElementById("main2_oblins");
  if (oblins) {
    oblins.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["*Coblin refuses to meet your gaze*",
        "I'm sorry. I had to tell them about what you did.",
        "HighU' found out immediately, forced my hand.",
        "*Zoblin forces a smile. You see through it.*",
        "*Roblin has moved out of the way of the door, a stern look on his face.*",
        "*Boblin watches you carefully.*",
        "*You better get going.*"
      ]);
    });
  }

    const badarua = document.getElementById("bal_arua_bad");
  if (badarua) {
    badarua.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["I give you are in charge here? It's a pleasure to finally meet.",
        "Is it your first time seeing something like me? Matters not, you won't make much of a difference in the end.",
        "I'm here because you have something that belongs to me.",
        "*The thing that was in the holding cell had a similar halo.*",
        "So, where is it?",
        "*It should still be...*",
        "Just kidding. It's dead by now. Your so-called 'higher ups' got to it.",
        "What now?",
        "I need its replacement.",
        "You seem perfect."
      ] "end1.html");
    });
  }

/* =======================
     GUUUUD : HOLDING 2 / BAL 2 CHARACTERS
  ======================= */

  const goodheld = document.getElementById("holding2_held");
  if (goodheld) {
    goodheld.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Foolish",
        "*What is THAT*",
        "You set these chains, why break them?",
        "*You didn't restrain it. This subject was not in your records.*",
        "*It squints its eyes. Eye? It squints.*",
        "You truly didn't...",
        "Maybe you are different, I was wrong",
        "I don't forgive these people.",
        "Bringing me here was one thing. Keeping me? I am a beacon.",
        "A beacon for the beings above.",
        "But, maybe you're the piece.",
        "Leave now. It's here. It will not wait much longer."
      ]);
    });
  }

    const goodarua = document.getElementById("bal_arua_good");
  if (goodarua) {
    goodarua.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["I give you are in charge here? It's a pleasure to finally meet.",
        "Is it your first time seeing something like me? Matters not, you won't make much of a difference in the end.",
        "I'm here because you have something that belongs to me.",
        "*The thing that was in the holding cell had a similar halo.*",
        "So, where is it?",
        "*It should still be...*",
        "Just kidding! It's long gone by now.",
        "Served its purpose. But, something else has caught my eye.",
        "You.",
        "This city regards you as the 'Pioneer of Science', the 'Condorian' champion. Impressive.",
        "I wonder what we can do with that.",
        "*What did you just get into...*"
      ] "end2.html" );
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

        feedback.innerText = "ACCESS GRANTED. SUBJECT RELEASED.";

        setTimeout(() => {
          window.location.href = "holding2.html";
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

  /* =======================
     CLICK TO ADVANCE DIALOGUE
  ======================= */

  document.addEventListener("click", (e) => {
    if (box.style.display !== "block") return;

    if (e.target.closest("#zoblin_outside")) return;

    advanceDialogue();
  });

});