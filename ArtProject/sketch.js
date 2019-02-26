
  //  Global variables
var circles = [];

var numCircle = 10
  // setup code
function setup() {
    var cnv = createCanvas(800, 800);
    cnv.position((windowWidth-width)/2, 30);
    background(20,20,20);
  }

function draw() {
  for(var i = 0; i < circles.length; i = i + 1){
      circles[i].run();
    }
  }

function loadCircle(numCircle){
  for(var i = 0; i < numCircle; i++){
      var loc = createVector(random(width), random(height));
      var vel = createVector(random(-3,3), random(-3,3));
      var radius = 20;
      c1 = new Ball(random(width), random(height), random(15, 35));
      circles.push(c1);
  }
}
