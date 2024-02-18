/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("comic sans");
}

function draw() {
  background(200);
  textSize(16);
  text("once upon a time...", 20, 60);
  textSize(32);
  if (mouseIsPressed)
  text("they were roommates", 20, 160);

}
