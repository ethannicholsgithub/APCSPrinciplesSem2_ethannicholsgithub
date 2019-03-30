
//  player is a comment
//  The setup function function is called once when your program begins
var player;
var ground;

var myFont;

var platforms = [];

var gravity = .5
var friction = .9;

var gameStatus = "MENU";

var playerKilled = false;

var doubleJump = 0;

var mouseHover = false;

var platformTouched = null;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 0, 0);


  rectMode(CENTER);

  loadPlayer();
  loadEnvironment();

}

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0, 125);
  noStroke();

  if(gameStatus === "MENU"){
    menu();
  }
  if(gameStatus === "INSTRUCTIONS"){
    instructions();
  }
  if(gameStatus === "LEVEL_1"){
    level1();
  }
  if(gameStatus === "LEVEL_2"){
    level2();
  }
  if(gameStatus === "LEVEL_3"){
    level3();
  }
  if(gameStatus === "GAMEOVER"){
    endGame();
  }

}


function menu(){
  textSize(100);
  textFont("Poiret One");
  fill(255,0,90);
  text("journey", 250, 400)

  mouseHover = collidePointCircle(mouseX, mouseY, 400, 500, 100);

  if(mouseHover){
    fill(255,0,90);
    ellipse(400, 500, 100);
    fill(0)
    textSize(32);
    text("play", 370, 507);
    //console.log(("clicks"));

  }else{
    fill(0);
    stroke(255,0,90);
    strokeWeight(3);
    ellipse(400, 500, 100);
    fill(255,0,90);
    strokeWeight(0);
    textSize(32);
    text("play", 370, 507);

  }
  
  stroke(255, 0, 90);
  strokeWeight(3)

}


function level1(){
  platforms.forEach(function(platform){
    platform.run();
  })

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);
  }

  if (player.loc.y > 800){
    playerKilled = true;
    gameOver = true;
  }
}


function loadPlayer() {
  let loc = createVector(400,200);
  let vel = createVector(0, 0);
  let col = color(255, 0, 0);
  player = new Player(loc, vel, col);
}

function loadEnvironment() {
  let loc = createVector(400, 700);
  let col2 = color(0, 255, 0);
  platforms.push(new Environment(createVector(400, 500), col2));
  platforms.push(new Environment(createVector(700, 500), col2));

}



function applyForces(){
  // Add gravity to force
  player.forcey += gravity;
  player.forcex *= friction;
}




function keyPressed(){

  if(keyCode === 32){

    if(doubleJump < 2){
      doubleJump++;
      player.forcey -= 20
    }
  }

}


function movement(){
  //if function for if RIGHTARROW is pressed
  if(keyIsDown(39)){
    player.forcex += 1 ;
  }

  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyIsDown(37)){
    player.forcex -= 1;
  }

}









function collisions(player, platforms){

  var right = player.loc.x + 20;
  var left = player.loc.x - 20;
  var top = player.loc.y - 20;
  var bottom = player.loc.y + 20;

  platforms.forEach(function(ground){
    var gright = ground.loc.x + ground.w/2;
    var gleft = ground.loc.x - ground.w/2;
    var gtop = ground.loc.y - ground.h/2;
    var gbottom = ground.loc.y + ground.h/2;


    //check top ground collision
    if(bottom > gtop && bottom < gbottom && right > gleft && left < gright && top < gtop) {
      player.loc.y = gtop - 20;
      platformTouched = ground;
      player.forcey = 0;
      doubleJump = 0;

    } else if(right > gleft && right < gright && bottom > gtop && top < gbottom && left < gleft) { //check left ground side collision
      player.loc.x = gleft - 20;
      //console.log("collision");
      player.forcex = 0;

    }else if(left < gright && left > gleft && bottom > gtop && top < gbottom && right > gright) { //check right side side collision
        player.loc.x = gright + 20;
        player.forcex = 0;

      }else if(top < gbottom && top > gtop && right > gleft && left < gright && bottom > gbottom) {   //check bottom  groundcollision
        player.loc.y = gbottom + 20;
        player.forcey = 0;
      }
  })
}
