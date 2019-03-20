function Player(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.speed = .0;

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
    if (this.loc.y > (ground.loc.y - 20)) {
      this.speed = this.speed * -.005;
    }
  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 40, 40);
  }
}
