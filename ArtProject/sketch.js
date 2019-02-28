//  Global variables
var balls = [];
var b1;

// put setup code here
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(10);
  b1 = new Ball(createVector(width / 2, height / 2), createVector(0 , 0), 25, color(255, 0, 0));

}

function draw() {
  background(0,0,0);
  // b1.run();
  for(var i = 0; i < balls.length; i = i + 1){
      balls[i].run();
  }
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){

        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(50, 150);
        var col = color(200,75,0);

        balls.push(new Ball(loc, vel, radius, col));

    }

}
