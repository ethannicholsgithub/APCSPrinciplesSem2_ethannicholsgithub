
//  This is a comment
//  The setup function function is called once when your program begins
var player;
var speed = 2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  rectMode(CENTER);

  loadPlayer();



}

//  The draw function is called @ 30 fps
function draw() {
  player.run();
}

function loadPlayer() {
  let loc = createVector(400, 400);
  let vel = createVector(0, 0);
  let col = color(255, 0, 0);
  player = new Player(loc, vel, col);
}

function keyPressed(){

  //if function for if UPARROW is pressed
  if(keyCode === 38){
    player.vel = createVector(0, -speed);
  }else{
    player.vel = createVector(0, 0);
  }

  //if function for if DOWNARROW is pressed
  if(keyCode === 40){
    player.vel = createVector(0, speed);
  }

  //if function for if RIGHTARROW is pressed
  if(keyCode === 39){
    player.vel = createVector(speed, 0);
  }

  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyCode === 37){
    player.vel = createVector(-speed, 0);
  }
}
