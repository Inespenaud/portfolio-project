/*
 * @name Interactivity 1
 * @frame 720,425
 * @description The circle changes color when you click on it.
 */

// for red, green, and blue color values
let r, g, b;

function setup() {
  createCanvas(720, 720);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(000);
  // Draw a circle
  strokeWeight(7);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
