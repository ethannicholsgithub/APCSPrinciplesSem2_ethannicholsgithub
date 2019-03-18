function Player(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col

  this.run = function() {
    this.render();
    this.update();
    this.checkedges();
  }

  this.update = function(){
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
    this.loc.add(this.vel);

  }

  this.checkedges = function(){

  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 40, 40);
  }
}
