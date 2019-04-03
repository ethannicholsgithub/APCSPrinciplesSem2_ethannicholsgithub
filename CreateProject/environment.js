function Environment(loc, w){
  this.loc = loc;
  this.w = 200;
  this.h = 100;


  this.run = function() {
    this.render();
  }


  this.render = function(){
    fill(0);
    stroke(255, 0, 90);
    strokeWeight(3);
    rect(this.loc.x, this.loc.y, this.w, this.h, 9);

  }
}
