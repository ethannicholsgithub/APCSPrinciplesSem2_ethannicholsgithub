function Player(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;

  this.forcex = 0;
  this.forcey = 0;

  this.maxspeed = 10;

  this.touch = false;

  hit = false;

  this.run = function() {
    this.render();
    this.update();
    this.checkedges();
  }

  this.update = function(){
    this.forcex = Math.max(Math.min(this.forcex, this.maxspeed), -this.maxspeed);
    this.forcey = Math.max(Math.min(this.forcey, this.maxspeed), -this.maxspeed);

    this.loc.x += this.forcex;
    this.loc.y += this.forcey;
  }

  this.checkedges = function(){

  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 40, 40, 4);
  }
}
