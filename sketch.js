var hr, mnAngle;
var mn, mnAngle;
var sc, scAngle;

function setup() {
  createCanvas(800,400);
  createSprite();

  // translate(400, 200);
}

function draw() {
  background(0,0,0);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  hrAngle = map(hr, 0, 60, -90, 270);
  mnAngle = map(mn, 0, 60, -90, 270);
  scAngle = map(sc, 0, 60, -90, 270);

  // hr.display();
  // mn.display();
  // sc.display();

  push();
  translate(400, 200);
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();

  push();
  translate(400, 200);
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();

  push();
  translate(400, 200);
  rotate(scAngle);
  stroke(25, 255, 0);
  strokeWeight(6);
  line(0, 0, 95, 0);
  pop();

  // translate(400, 200);
  push();
  noFill()
  stroke(25, 255, 0)
  strokeWeight(6);
  arc(400, 200, 220, 220, 270, scAngle, TWO_PI);
  pop();

  push();
  noFill()
  stroke(255, 0, 0)
  strokeWeight(6);
  arc(400, 200, 250, 250, 270, mnAngle, TWO_PI);
  pop();

  push();
  noFill()
  stroke(0, 0, 255)
  strokeWeight(6);
  arc(400, 200, 270, 270, 270, hrAngle, TWO_PI);
  pop();
}