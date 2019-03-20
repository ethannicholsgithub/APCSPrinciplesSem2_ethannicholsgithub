function Environment(loc, col2){
  this.loc = loc;
  this.col2 = col2;

  this.run = function() {
    this.render();
  }


  this.render = function(){
    fill(this.col2);
    rect(this.loc.x, this.loc.y, 100, 40);
  }
}
