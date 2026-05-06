function createDialogue(characterId, boxId, textId, lines, duration = 10000) {
  let currentLine = 0;

  const character = document.getElementById(characterId);
  const box = document.getElementById(boxId);
  const text = document.getElementById(textId);

  if (!character || !box || !text) return;

  character.addEventListener("click", (e) => {
    e.stopPropagation();

    box.style.display = "block";
    text.innerText = lines[currentLine];

    currentLine++;

    if (currentLine >= lines.length) {
      currentLine = 0;
    }

    setTimeout(() => {
      box.style.display = "none";
    }, duration);
  });
}

/* --- Dialouge --- */

document.addEventListener("DOMContentLoaded", () => {
  createDialogue(
    "zoblin_outside",
    "dialogue_box",
    "zoblin_outside_dialogue_text",
    [
      "Hey! First train, as usual?",
      "Well, head on inside. I heard the others chatting about you again.",
      "Especially that Coblin kid. He think's he so good in the lab.",
      "Ah, I guess he's there for a reason, no?",
      "Punch him for me? He still owes me for holding the trains for him."
    ]
  );

  createDialogue(
    "main1_roblin",
    "dialogue_box",
    "roblin_main1_dialogue_text",
    [
      "Hey! First train, as usual?",
      "Well, head on inside. I heard the others chatting about you again.",
      "Especially that Coblin kid. He think's he so good in the lab.",
      "Ah, I guess he's there for a reason, no?",
      "Punch him for me? He still owes me for holding the trains for him."
    ]
  );

  createDialogue(
    "main1_boblin",
    "dialogue_box",
    "boblin_main1_dialogue_text",
    [
      "Hey! First train, as usual?",
      "Well, head on inside. I heard the others chatting about you again.",
      "Especially that Coblin kid. He think's he so good in the lab.",
      "Ah, I guess he's there for a reason, no?",
      "Punch him for me? He still owes me for holding the trains for him."
    ]
  );

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