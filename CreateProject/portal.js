function Portal(loc, col, vel){
  this.loc = loc;
  this.col = col;
  this.vel = vel;
  this.acc = createVector(0, .1);

  var x = 50;

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){

    x = x - random(3, .1);
    if(x < 0){
      x = 50;
      this.loc.x = portalPosX
      this.loc.y = portalPosY
      this.vel = createVector(random(-1,1), random(-1,1));
    }
    this.loc.add(this.vel);
    this.acc.add(this.vel);

  }

  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, x);

  }

}
