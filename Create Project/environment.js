function Environment(loc, col2, w, h){
  this.loc = loc;
  this.col2 = col2;
  this.w = w;
  this.h = h;

  this.run = function() {
    this.render();
  }


  this.render = function(){
    fill(this.col2);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
