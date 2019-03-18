//  Global variables
var balls = [];
var b1;
var toggle = true;

// put setup code here
function setup() {

  var cnv = createCanvas(1920, 1080);
  cnv.position((windowWidth-width)/2, 30);

  background(20,20,20);
  loadBalls(200);
  b1 = new Ball(createVector(width / 2, height / 2), createVector(0 , 0), 25, color(255, 0, 0))
  frameRate(200);



}

function draw() {
  if(toggle){
    background(0,0,0);

    for(var i = 0; i < balls.length; i = i + 1){
        balls[i].run();
    }
  }
  fill(255,255,255);
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){

        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(70, 150);
        var col = color(255,0,0);

        balls.push(new Ball(loc, vel, radius, col));

    }

}

function mousePressed(){
  toggle = !toggle;
}
