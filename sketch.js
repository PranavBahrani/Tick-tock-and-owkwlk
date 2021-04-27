 hr = hour();
 mn = minute();
 sc = second();
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();
  drawSprites();
}