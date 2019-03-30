function Environment(loc, col2, w, h){
  this.loc = loc;
  this.col2 = col2;
  this.w = random(100, 200);
  this.h = random(100, 800);


  this.run = function() {
    this.render();
  }


  this.render = function(){
    fill(this.col2);
    rect(this.loc.x, this.loc.y, this.w, this.h, 9);

  }
}
