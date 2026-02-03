// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  //smiley face's center coordinates
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

  //smile
  noFill();
  stroke(0);
  strokeWeight(8);
  arc(circlex, circley + 20, 150, 120, 0, PI); //smile

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Yay, the visitor purchased your art!", width / 2, 200);

  // Instruction text
  textSize(20);
  text(
    "Click or press R to return to the start of the Interactive Art Gallery.",
    width / 2,
    700,
  );

  //points
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(28);
  text("Coins Earned:", circlex, circley + 160);

  fill(255);
  stroke(0);
  textSize(60);
  text(playerPoints, circlex, circley + 220);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
