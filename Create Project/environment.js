function Environment(loc, col2, w, h){
  this.loc = loc;
  this.col2 = col2;
  this.w = random(40, 600);
  this.h = random(40, 600);

  this.run = function() {
    this.render();
  }


  this.render = function(){
    fill(this.col2);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
