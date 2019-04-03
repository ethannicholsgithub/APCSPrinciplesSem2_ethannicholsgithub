function Floor(loc, col){
  this.loc = loc;
  this.col = col;

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){

    this.loc.y = this.loc.y - speed;

  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 800, 800);

  }

}
