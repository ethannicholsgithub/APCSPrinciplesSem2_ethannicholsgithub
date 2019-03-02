//  Global variables
var balls = [];
var b1;
var img;
var toggle = true;

// put setup code here
function setup() {
  img = loadImage('SIVA.png');
  var cnv = createCanvas(1440, 900);
  cnv.position((windowWidth-width)/2, 30);
  angleMode(DEGREES);
  background(20,20,20);
  loadBalls(150);
  b1 = new Ball(createVector(width / 2, height / 2), createVector(0 , 0), 25, color(255, 0, 0))
  frameRate(200);
  rectMode(CENTER)



}

function draw() {
  if(toggle){
    background(0,0,0,);

    for(var i = 0; i < balls.length; i = i + 1){
        balls[i].run();
    }
  }
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){

        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-5,5), random(-5,5));
        var radius = random(50, 150);
        var col = color(255,0,0);

        balls.push(new Ball(loc, vel, radius, col));

    }

}

function mousePressed(){
  toggle = !toggle;
}
