// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  //sad face's center coordinates
  let circlex = width / 2;
  let circley = width / 2;

  //face
  fill(255, 220, 0);
  noStroke();
  ellipse(circlex, circley, 250, 250);

  //eyes
  fill(0);
  ellipse(circlex - 50, circley - 40, 30, 40); //left eye
  ellipse(circlex + 50, circley - 40, 30, 40); //right eye

  //frown
  noFill();
  stroke(0);
  strokeWeight(8);
  arc(circlex, circley + 60, 150, 120, PI, TWO_PI); //smile

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("Aw, visitor didn't purchase!", width / 2, 200);

  // Instruction text
  textSize(20);
  text(
    "Click or press R to return to the start of the Interactive Art Gallery.",
    width / 2,
    600,
  );
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
