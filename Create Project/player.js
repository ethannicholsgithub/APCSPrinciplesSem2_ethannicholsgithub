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
    // Add speed to location
      this.y = this.y + this.speed;

      // Add gravity to speed
      this.speed = this.speed + gravity;

      // If square reaches the bottom
      // Reverse speed
      if (this.y > height) {
        this.speed = this.speed * -0.95;
      }
  }

  this.checkedges = function(){

  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 40, 40);
  }
}
