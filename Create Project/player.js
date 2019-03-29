function Player(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.speed = 1;
  this.touch = false;

  this.run = function() {
    this.render();
    this.update();
    this.checkedges();
  }

  this.update = function(){
    // Add speed to location
    this.loc.y = this.loc.y + this.speed;

    // Add gravity to speed
    this.speed = this.speed + gravity;
  }

  this.checkedges = function(){
    if (this.loc.y + 20 > (ground.loc.y - ground.h/2) && this.loc.y < (ground.loc.y + ground.h/2) && this.loc.x < ground.loc.x + ground.w/2
    && this.loc.x > (ground.loc.x - ground.w/2)){
      this.speed = this.speed * -.05;
      this.touch = true;
    }else{
      this.touch = false;
    }
  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 40, 40);
  }
}
