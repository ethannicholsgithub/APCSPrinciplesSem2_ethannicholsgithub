


//---------------------PLAYER VARIABLES--------------------\\
var player;
var gravity = .5
var friction = .9;
var playerKilled = false;
var doubleJump = 0;
var platformTouched = null;

//--------------------ENVIRONMENT VARIABLES----------------------\\
var ground;
var platforms = [];
var speed = 1;
var gameStatus = "MENU";

//-----------------------STYLE VARIABLES--------------------\\
var myFont;
var fade = 0;
var mouseHover = false;
var levelChecker = "Level 1"

//------------------------PORTAL VARIABLES------------------\\
var portal = [];
var x = 400
var portalPosX = 750;
var portalPosY = 350;
var portalRadius = 20;

function preload() {
  soundFormats('mp3', 'ogg');
  jumpSound = loadSound('http://freesound.org/data/previews/350/350898_5450487-lq.mp3');
  backgroundMusic = loadSound("https://freesound.org/data/previews/466/466138_9849907-lq.mp3");
  levelSound = loadSound("http://freesound.org/data/previews/146/146718_2437358-lq.mp3");
}


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(10);
  fill(200, 0, 0);
  backgroundMusic.loop(0,1,0.1);

  textFont("Poiret One");
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  loadPlayer();
  loadPortal(20);
  loadLava();
}



function draw() {
  background(10, 125);
  noStroke();
  frameRate(60);
  // console.log(player.loc.y);

//------------------------GAME STATUS----------------------\\
  if(gameStatus === "MENU"){
    menu();
    fade += 1;
  }
  if(gameStatus === "INSTRUCTIONS"){
    instructions();
    fade += 2.75;
  }
  if(gameStatus === "LEVEL_1"){
    level1();

    noStroke();
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_2"){
    level2();

    noStroke();
    levelChecker = "Level 2";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_3"){
    level3();

    noStroke();
    levelChecker = "Level 3";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_4"){
    level4();

    noStroke();
    levelChecker = "Level 4";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_5"){
    level5();

    noStroke();
    levelChecker = "Level 5";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_6"){
    level6();

    noStroke();
    levelChecker = "Level 6";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_7"){
    level7();

    noStroke();
    levelChecker = "Level 7";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "LEVEL_8"){
    level8();

    noStroke();
    levelChecker = "Level 8";
    textSize(25);
    text(levelChecker, 45, 25);
  }
  if(gameStatus === "GAMEOVER"){
    endGame();
    fade += 2.75;
  }
  if(gameStatus === "WIN"){
    winGame();
    fade += 2.75;
  }

}


//------------------------------LEVEL 7------------------------\\
function level8(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20 , 40, 40, portalPosX, portalPosY, 15);

  if(done && gameStatus === "LEVEL_8"){
    console.log("win");
    setTimeout(toWin, 10);
  }
  function toWin(){
    gameStatus = "WIN";
  }
}


//---------------------------------LEVEL 6------------------------\\
function level7(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20 , 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_7"){
    setTimeout(toLevel8, 10);
  }
  function toLevel8(){
    levelSound.amp(0.1);
    levelSound.play();
    //console.log("next level");
    gameStatus = "LEVEL_8";
    player.loc.x = 50
    player.loc.y = 600
    portalPosX = 50;
    portalPosY = 75;
    lava.loc.y = 1200;
    speed = 1.85

    platforms = [];
    platforms.push(new Environment(createVector(0, 700)));
    platforms.push(new Environment(createVector(800, 550)));
    platforms.push(new Environment(createVector(0, 400)));
    platforms.push(new Environment(createVector(800, 250)));
    platforms.push(new Environment(createVector(0, 175)));

  }
}


//---------------------------------LEVEL 6------------------------\\
function level6(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20 , 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_6"){
    setTimeout(toLevel7, 10);
  }
  function toLevel7(){
    levelSound.play(0, 1, 0.4);
    //console.log("next level");
    gameStatus = "LEVEL_7";
    player.loc.x = 150
    player.loc.y = 55
    portalPosX = 150;
    portalPosY = 450;
    lava.loc.y = 1200;
    speed = 3.75

    platforms = [];
    platforms.push(new Environment(createVector(150, 155)));

  }
}



//------------------------------LEVEL 5-----------------------\\
function level5(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20 , 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_5"){
    setTimeout(toLevel6, 10);
  }
  function toLevel6(){
    levelSound.play(0, 1, 0.4);
    //console.log("next level");
    gameStatus = "LEVEL_6";
    player.loc.x = 200
    player.loc.y = 500
    portalPosX = 675;
    portalPosY = 55;
    lava.loc.y = 1200;
    speed = 3.25

    platforms = [];
    platforms.push(new Environment(createVector(200, 650)));
    platforms.push(new Environment(createVector(600, 650)));
    platforms.push(new Environment(createVector(400, 450)));
    platforms.push(new Environment(createVector(150, 375)));
    platforms.push(new Environment(createVector(400, 200)));
    platforms.push(new Environment(createVector(675, 155)));
  }
}



//-----------------------------LEVEL 4----------------------------\\
function level4(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20 , 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_4"){
    setTimeout(toLevel5, 10);
  }
  function toLevel5(){
    levelSound.play(0, 1, 0.4);
    //console.log("next level");
    gameStatus = "LEVEL_5";
    player.loc.x = 400
    player.loc.y = 450
    portalPosX = 400;
    portalPosY = 250;
    lava.loc.y = 1200;
    speed = 3

    platforms = [];
    platforms.push(new Environment(createVector(400, 550)));
  }
}



//--------------------------------LEVEL 3-----------------------\\
function level3(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20 , 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_3"){
    setTimeout(toLevel4, 10);
  }
  function toLevel4(){
    levelSound.play(0, 1, 0.4);
    //console.log("next level");
    gameStatus = "LEVEL_4";
    player.loc.x = 100
    player.loc.y = 500
    portalPosX = 110;
    portalPosY = 100;
    lava.loc.y = 1200;
    speed = 2.5;

    platforms = [];
    platforms.push(new Environment(createVector(110, 600)));
    platforms.push(new Environment(createVector(600, 380)));
    platforms.push(new Environment(createVector(110, 200)));
  }
}



//----------------------------LEVEL 2-----------------------\\
function level2(){
  // console.log("level 2");
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20, 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_2"){
    setTimeout(toLevel3, 10);
  }
  function toLevel3(){
    levelSound.play(0, 1, 0.4);
    //console.log("next level");
    gameStatus = "LEVEL_3";
    player.loc.x = 100;
    player.loc.y = 500;
    portalPosX = 700;
    portalPosY = 100;
    lava.loc.y = 1200;
    speed = 2;

    platforms = [];
    platforms.push(new Environment(createVector(110, 600)));
    platforms.push(new Environment(createVector(400, 400)));
    platforms.push(new Environment(createVector(700, 200)));

  }
}



//-------------------------LEVEL 1---------------------\\
function level1(){
  platforms.forEach(function(platform){
    platform.run();
  })

  for(var i = 0; i < portal.length; i++){
    portal[i].run();
  }

  if(playerKilled === false){
    applyForces();

    movement();

    player.run();

    collisions(player, platforms);

    lava.run();
  }

  var done = collideRectCircle(player.loc.x-20, player.loc.y-20, 40, 40, portalPosX, portalPosY, portalRadius);

  if(done && gameStatus === "LEVEL_1"){
    setTimeout(toLevel2, 10)
  }
  function toLevel2(){
    levelSound.play(0, 1, 0.4);
    //console.log("next level");
    gameStatus = "LEVEL_2";
    player.loc.x = 50
    player.loc.y = 350
    portalPosX = 750;
    portalPosY = 350;
    lava.loc.y = 1200;
    speed = 1.5


    platforms = [];
    platforms.push(new Environment(createVector(0, 450)));
    platforms.push(new Environment(createVector(800, 450)));
  }
}
















//--------------------------MENU Functions-------------------------\\

function menu(){
  textSize(100);
  fill(255,0,90, fade);
  text("neon", 400, 350);

  playButton();
  instructionsButton();


  stroke(255, 0, 90);
  strokeWeight(3)

}



//----------------------GAME OVER Functions----------------------\\

function endGame(){
  background(10)
  textSize(100);
  fill(255,0,90, fade);
  text("game over", 400, 350);

  restartButton();
  menuButton();
}



//-------------------------WIN screen functions--------------------\\

function winGame(){
  background(10)
  textSize(100);
  fill(255,0,90, fade);
  text("you win!", 400, 350);

  menuButton();
}



//------------------------instructions----------------------\\

function instructions(){
  textSize(25);
  fill(255,0,90, fade);
  text("Use the ARROW KEYS to move left and right and the SPACEBAR to jump", 400, 100, 400, 100);
  text("Press SPACEBAR again while in air to preform a double jump", 400, 225, 400, 100);
  text("Get to the portal to proceed", 400, 350, 400, 100);
  text("Avoid the lava", 400, 475, 400, 100);



  menuButton();
}






//---------------------Player + World Functions-------------------------\\

function loadPlayer() { //load the player
  let loc = createVector(50,350);
  let vel = createVector(0, 0);
  let col = color(255, 0, 90);
  player = new Player(loc, vel, col);
}

function loadPortal(numParticles) { //load the player
  for(var i = 0; i < numParticles; i++){
    let loc = createVector(portalPosX, portalPosY);
    let col = color(255, 0, 90);
    let vel = createVector(random(-1,1), random(-1,1));
    portal.push(new Portal(loc, col, vel));
  }
}

function loadLava() { // load the world
  let loc = createVector(400, 1200);
  let col = color(255, 0, 90);
  lava = new Floor(loc, col)
}

function applyForces(){ // add the forces for physics
  // Add gravity to force
  player.forcey += gravity;
  //add friction to left and right movement
  player.forcex *= friction;
}

//jumping and double jumping
function keyPressed(){// if a key is pressed

  if(keyCode === 32){// if specifically the SPACEBAR is pressed

    if(doubleJump < 2){
      jumpSound.play();
      jumpSound.amp(1);
      doubleJump++; //add one to doubleJump until it is 2
      player.forcey -= 20 //add a bottom force that is greater than gravvity to push the player upward
      /*
      as long as doubleJump is less than 2 then you may jump, when the player touches
      the ground then doubleJump is reset to 0.
      */
    }
  }
}





//------------------------MOVEMENT----------------------------\\

function movement(){
  //if function for if RIGHTARROW is pressed
  if(keyIsDown(39)){
    player.forcex += 1 ; //add a force to the left moving it right
  }

  //if function for if LEFTARRROW is pressed
  if(keyIsDown(37)){
    player.forcex -= 1; //add a force to the right moving it left
  }

}




//--------------------------COLLISION DETECTION-----------------------\\

function collisions(player, platforms){

  // set each side to the location and the padding, this is so that detection is easier to read
  var right = player.loc.x + 20;
  var left = player.loc.x - 20;
  var top = player.loc.y - 20;
  var bottom = player.loc.y + 20;

  platforms.forEach(function(ground){ //the for loop check detection for each piece of ground that the player can touches
    //set the side of the ground to the location and it's padding
    var gright = ground.loc.x + ground.w/2;
    var gleft = ground.loc.x - ground.w/2;
    var gtop = ground.loc.y - ground.h/2;
    var gbottom = ground.loc.y + ground.h/2;


    //check top ground collision
    if(bottom > gtop && bottom < gbottom && right > gleft && left < gright && top + 25 < gtop) {

      player.loc.y = gtop - 20; //snap the location to outside the ground perimeter
      platformTouched = ground; //confirm that the player is touching the ground
      player.forcey = 0; //stop the force from pulling the player into the ground, this is so the change in player position happes only once
      doubleJump = 0;  //reset the number of jumps the player can have

    } else if(right > gleft && right < gright && bottom > gtop && top < gbottom && left < gleft) { //check left ground side collision

      player.loc.x = gleft - 20; // snap position outside of ground perimeter
      player.forcex = 0; // stop forces in the x direction

    }else if(left < gright && left > gleft && bottom > gtop && top < gbottom && right > gright) { //check right side side collision

      player.loc.x = gright + 20;// snap position outside of the ground perimeter
      player.forcex = 0; // stop forces in the x direction

    }else if(top < gbottom && top > gtop && right > gleft && left < gright && bottom > gbottom) {   //check bottom  groundcollision

      player.loc.y = gbottom + 20; // snap postiion outside of ground perimeter
      player.forcey = 0; // stop forces in y direction
    }
  })

  if(player.loc.y + 10 > lava.loc.y - 400){
    playerKilled = true;
    setTimeout(toGameOver, 25)
    //console.log("player dead");
  }
  function toGameOver(){
    gameStatus = "GAMEOVER" // chenge to level 1
  }
}




//-------------------------BUTTONS---------------------------\\

//RESTART BUTTON
function restartButton(){
  mouseHover = collidePointCircle(mouseX, mouseY, 400, 500, 100); //set mouseHover to true when mouse and circle collide

  if(mouseHover){ //if the mouse is on the circle change color
    fill(255,0,90, fade); //fill the circle
    ellipse(400, 500, 100);

    fill(0);
    textSize(32);
    text("restart", 400, 500);
    //console.log(("clicks"));

  }else{ //if mouse is not on the circle
    fill(10);// fill the circel
    stroke(255,0,90, fade);
    strokeWeight(3);
    ellipse(400, 500, 100);

    fill(255,0,90, fade);// fill the text
    strokeWeight(0);
    textSize(32);
    text("restart", 400, 500);
  }

  if(mouseHover && mouseIsPressed === true){ //if mouse is on the cicle and left mouse button is pressed
    if(mouseButton === LEFT){
      playerKilled = false;
      fade = 0;
      player.loc.x = 50;
      player.loc.y = 350;
      portalPosX = 750;
      portalPosY = 350;
      lava.loc.y = 1200;
      speed = 1;

      platforms = [];
      platforms.push(new Environment(createVector(0, 450)));
      platforms.push(new Environment(createVector(400, 450)));
      platforms.push(new Environment(createVector(800, 450)));
      gameStatus = "LEVEL_1" // chenge to level 1
    }
  }
}


//PLAY BUTTON
function playButton(){
  mouseHover = collidePointCircle(mouseX, mouseY, 400, 500, 100); //set mouseHover to true when mouse and circle collide

  if(mouseHover){ //if the mouse is on the circle change color
    fill(255,0,90); //fill the circle
    ellipse(400, 500, 100);

    fill(0);
    textSize(32);
    text("play", 400, 500);
    //console.log(("clicks"));

  }else{ //if mouse is not on the circle
    fill(10);// fill the circel
    stroke(255,0,90);
    strokeWeight(3);
    ellipse(400, 500, 100);

    fill(255,0,90);// fill the text
    strokeWeight(0);
    textSize(32);
    text("play", 400, 500);
  }

  if(mouseHover && mouseIsPressed === true){ //if mouse is on the cicle and left mouse button is pressed
    if(mouseButton === LEFT){
      playerKilled = false;
      fade = 0;

      player.loc.x = 50;
      player.loc.y = 350;
      portalPosX = 750;
      portalPosY = 350;
      lava.loc.y = 1200;
      speed = 1;

      platforms = [];
      platforms.push(new Environment(createVector(0, 450)));
      platforms.push(new Environment(createVector(400, 450)));
      platforms.push(new Environment(createVector(800, 450)));


      gameStatus = "LEVEL_1" // chenge to level 1
    }
  }
}


//MENU BUTTON
function menuButton(){
  mouseHover = collidePointCircle(mouseX, mouseY, 400, 650, 100); //set mouseHover to true when mouse and circle collide

  if(mouseHover){ //if the mouse is on the circle change color
    fill(255,0,90, fade); //fill the circle
    ellipse(400, 650, 100);

    fill(0);
    textSize(32);
    text("menu", 400, 650);
    //console.log(("clicks"));

  }else{ //if mouse is not on the circle
    fill(10);// fill the circel
    stroke(255,0,90, fade);
    strokeWeight(3);
    ellipse(400, 650, 100);

    fill(255,0,90, fade)// fill the text
    strokeWeight(0);
    textSize(32);
    text("menu", 400, 650);
  }
    if(mouseHover && mouseIsPressed && (gameStatus === "GAMEOVER" || gameStatus === "WIN" || gameStatus === "INSTRUCTIONS")){ //if mouse is on the cicle and left mouse button is pressed
      if(mouseButton === LEFT){
        setTimeout(toMenu, 100);
      }
    }
}

function toMenu(){
  fade = 0;
  gameStatus = "MENU" // chenge to level 1
}


// INSTRUCTIONS BUTTON
function instructionsButton(){
  if(gameStatus !== "MENU"){
    x = -100;
  }else{
    x = 400;
  }

  mouseHover = collidePointCircle(mouseX, mouseY, x, 650, 100); //set mouseHover to true when mouse and circle collide

  if(mouseHover){ //if the mouse is on the circle change color
    fill(255,0,90); //fill the circle
    ellipse(400, 650, 100);

    fill(0);
    textSize(20);
    text("how to play", 400, 650, 70, 80);
    //console.log(("clicks"));

  }else{ //if mouse is not on the circle
    fill(10);// fill the circel
    stroke(255,0,90);
    strokeWeight(3);
    ellipse(400, 650, 100);

    fill(255,0,90)// fill the text
    strokeWeight(0);
    textSize(20);
    text("how to play", 403, 650, 70, 80);
  }

  if(mouseHover && mouseIsPressed === true && gameStatus === "MENU"){ //if mouse is on the cicle and left mouse button is pressed
    if(mouseButton === LEFT){
      setTimeout(toInstructions, 150); // chenge to level 1
    }
  }
}

function toInstructions(){
  fade = 0;
  gameStatus = "INSTRUCTIONS" // chenge to level 1
}
