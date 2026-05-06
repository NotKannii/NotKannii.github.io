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
      startDialogue(["Roblin talk"]);
    });
  }

  const boblin = document.getElementById("main1_boblin");
  if (boblin) {
    boblin.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Boblin talk"]);
    });
  }

  const coblin = document.getElementById("lab1_coblin");
  if (coblin) {
    coblin.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Coblin talk"]);
    });
  }

    const car = document.getElementById("lab1_car");
  if (car) {
    car.addEventListener("click", (e) => {
      e.stopPropagation();
      startDialogue(["Coblin talk"]);
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

  /* =======================
     CLICK TO ADVANCE DIALOGUE
  ======================= */

  document.addEventListener("click", (e) => {
    if (box.style.display !== "block") return;

    if (e.target.closest("#zoblin_outside")) return;

    advanceDialogue();
  });

});