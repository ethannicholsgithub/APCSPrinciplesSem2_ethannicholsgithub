

/*
**   Ball constructer function
**   Ethan Nichols
**   Aug 21, 2018
*/
function Ball(location, velocity, radius, col){

  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0, .1);

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  // This function changes the location of the ball
  // by adding speed to x and
  this.update = function(){
    var steeringForce = p5.Vector.sub(b1.loc, this.loc);
    this.vel.add(this.steeringForce);
    this.loc.add(this.vel);
    this.acc.add(this.vel);
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // render() draws the ball at the new location
  this.render = function(){
    noStroke();
    // var ratio = (width/2) / 255;
    // var ballDist = int(dist(this.loc.x, this.loc.y, width/2, height/2))
    // var alpha = int(ballDist / ratio);
    // var newColor = color(red(this.col), green(this.col), blue(this.col), alpha);
    // var r = 20


    fill(50,0,0,255);
    //ellipse(this.loc.x, this.loc.y, r, r);

    for(i = 0; i < balls.length; i++){
      var d = int(dist(this.loc.x, this.loc.y, balls[i].loc.x, balls[i].loc.y));
      if(d < radius){
        triangle(this.loc.x, this.loc.y, balls[i].loc.x, balls[i].loc.y,960,560);
        stroke(255, 0, 0, alpha);
        strokeWeight(5);
      }
    }
  }

}
