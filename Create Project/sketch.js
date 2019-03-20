
//  This is a comment
//  The setup function function is called once when your program begins
var player;
var ground;

var gravity = 0.1

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  rectMode(CENTER);

  loadPlayer();
  loadEnvironment();


}

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0, 10);
  noStroke();

  ground.run();
  player.run();
  keyPressed();

}

function loadPlayer() {
  let loc = createVector(400,400);
  let vel = createVector(0, 0);
  let col = color(255, 0, 0);
  player = new Player(loc, vel, col);
}

function loadEnvironment() {
  let loc = createVector(400,700);
  let col2 = color(0, 255, 0);
  ground = new Environment(loc, col2);
}

function keyPressed(){
  //if function for if UPARROW is pressed
  if(keyIsDown(40)){
    player.loc.y += 5;
  }

  //if function for if DOWNARROW is pressed
  if(keyIsDown(38)){
    player.loc.y -= 5;
  }

  //if function for if RIGHTARROW is pressed
  if(keyIsDown(39)){
    player.loc.x += 5;
  }

  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyIsDown(37)){
    player.loc.x -= 5;
  }

}
