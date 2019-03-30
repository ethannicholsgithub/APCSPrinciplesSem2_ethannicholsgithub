function Environment(loc, col2){
  this.loc = loc;
  this.col2 = col2;

  var w = 400;
  var h = 40

  this.run = function() {
    this.render();
  }


  this.render = function(){
    fill(this.col2);
    rect(this.loc.x, this.loc.y, w, h);
  }
}
