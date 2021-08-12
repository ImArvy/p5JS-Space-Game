function spaceShip() {
  this.x = width / 2;
  this.y = height - 40;
  this.r = 40;
  this.shipSpeed = 0;
  this.newShipSpeed = 10;
  this.shipHealth = 5;
  this.selfDestruct = false;
   
  this.hits = function(saucer) {
    let d = dist(this.x, this.y, saucer.x, saucer.y);
    if(d < this.r + saucer.r) {
      tint(40, 40, 40);
      return true;
    } else if(d > this.r + saucer.r){
      noTint();
      return false;
    }
  }
  
  this.move= function() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { 
      if (this.x > 40) { // Set left boundary.
        this.shipSpeed = this.newShipSpeed;
        this.x -= this.shipSpeed;
      }
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      if (this.x === 20 || this.x < width - 40) { // Set right boundary
        this.shipSpeed = this.newShipSpeed;
        this.x += this.shipSpeed;
        if (this.x === width - 40) {
          this.shipSpeed = 0;
        }
      }
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) { 
      if (this.y > height - 140) { // Set top boundary.
        this.shipSpeed = this.newShipSpeed;
        this.y -= this.newShipSpeed;
      }
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      if (this.y === height - 400 || this.y < height - 40) { // Set bottom boundary.
        this.shipSpeed = this.newShipSpeed;
        this.y += this.shipSpeed;
        if (this.y === this.height - 40) {
          this.shipSpeed = 0;
        }
      }
    }
  }
  
  this.display = function() {
    //fill(0, 255, 255);
    //rectMode(CENTER) ;
    //rect (this.x, this.y, this.shipWidth, this.shipHeight);
    if(!this.selfDestruct) {
      image(shipImg, this.x, this.y, this.r * 2, this.r * 2)
    } else if(this.selfDestruct) {
      fill(255, random(100, 255), 0);
      noStroke();
      ellipseMode(CENTER);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
      if(this.r * 2 >= 80 && this.r * 2 < 240) {
        this.r++;
        if(this.r * 2 === 240) {
          this.r = 40;
        }
      }
    }
  }
}
