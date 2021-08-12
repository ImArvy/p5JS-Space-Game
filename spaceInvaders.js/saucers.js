function saucers(x, y) {
  this.x = x; // 40
  this.y = y; // 20
  this.r = 20;
  //this.xStartSpeed = 2;
  //this.yStartSpeed = 2;
  //this.xReverseSpeed = -2;
  //this.yReverseSpeed = -2;
  this.xSpeed = 10;
  this.ySpeed = 10;
  
  this.deleteSaucer = false;
  
  //this.goingDown = false;
  //this.goingUp = false;
  
  this.display = function() {  
    //fill(255, 0, 255);
    //ellipseMode(CENTER);
    //ellipse(this.x, this.y, this.r* 2, this.r * 2);
    if(!this.deleteSaucer) {
      image(saucerImg, this.x, this.y, this.r * 3, this.r * 3);
    } else if(this.deleteSaucer) {
      fill(255, random(100, 255), 0);
      noStroke();
      ellipseMode(CENTER);
      ellipse(this.x, this.y, this.r, this.r);
      if(this.r >= 20 && this.r < 80) {
        this.r++;
      }
    }
  }
  
  this.getOutaHereSaucers = function() {
    this.deleteSaucer = true;   
  }
  
  this.reverseDirection = function() {
    this.xSpeed *= -1;
    return this.xSpeed;
  }
  
  this.moveDown = function() {
    this.shouldGoDown = true;
    return this.shouldGoDown;
  }
  
  this.shouldGoDown = false;
  this.downMovement = 60;
  this.move = function() {
    if(x > 0 && this.x < width - 20 && !this.shouldGoDown) {
      this.x += this.xSpeed;
    }
    
    if(this.x === width - 20 && this.y < this.downMovement && !this.shouldGoDown) {
      this.moveDown();
    }
    
    if(this.shouldGoDown && this.x === width - 20) {
      this.y += this.ySpeed;
    }
    
    if(this.y === this.downMovement && this.x === width - 20) {
      this.shouldGoDown = false;
    }
    
    if(this.x === width - 20 && this.y === this.downMovement && !this.shouldGoDown) {
      this.reverseDirection();
      this.x += this.xSpeed;
      this.downMovement += 40;
    }
    
    if(this.x === 20 && this.y < this.downMovement && !this.shouldGoDown) {
      this.moveDown();
    }
    
    if(this.shouldGoDown && this.x === 20) {
      this.y += this.ySpeed;
    }
    
    if(this.y === this.downMovement && this.x === 20) {
      this.shouldGoDown = false;
    }
    
    if(this.x === 20 && this.y === this.downMovement && !this.shouldGoDown) {
      this.reverseDirection();
      this.x += this.xSpeed;
      this.downMovement += 40;
    }
  }
  
  /*this.move = function() {
    if(this.x > 0 && this.x < width - 20 && !this.goingDown && !this.goingUp) { // If we moved over one and until we reach right border.
      this.x += this.xStartSpeed; // Move to the right continuously.
    }
    if(this.x === width - 20 && this.y === 20 && !this.goingDown && !this.goingUp) { // If we are at right border and y is at default pos.
      this.y += this.yStartSpeed; // Move down.
      this.goingDown = true; // Set bool goingDown to true.
    }
    if(this.y > 20 && this.y < 60 && this.goingDown && !this.goingUp) { // If we moved down until we reach bottom limit.
      this.y += this.yStartSpeed; // Move down continuosly.
    }
    if(this.y === 60 && this.x === width - 20 && this.goingDown && !this.goingUp) { // If we are at the bottom limit.
      this.x += this.xReverseSpeed; // Move over to the left.
    } 
    if(this.x < width - 20 && this.x > 20 && this.goingDown && !this.goingUp) { // If we moved over and until we reach left border.
      this.x += this.xReverseSpeed; // Move to the left continuously.
    }
    if(this.goingDown && this.x === 20) { // Once we are at the left border after going down and left.
      this.goingDown = false; // Set bool goingDown to false.
    }
    if(this.x === 20 && this.y === 60 && !this.goingDown && !this.goingUp) { // If we are at the left border and we went down.
      this.y += this.yReverseSpeed; // Move up.
      this.goingUp = true; // Set bool goingUp to true.
    }
    if(this.y < 60 && this.y > 20 && !this.goingDown && this.goingUp) { // If we are at the left border and we can go up.
      this.y += this.yReverseSpeed; // Move up continuosly.
    }
    if(this.y === 20 && this.x === 20 && !this.goingDown && this.goingUp) { // If we reach the top left border.
      this.x += this.xStartSpeed; // Move right.
    }
    if(this.y === 20 & this.x > 20 && this.x < width-20 && !this.goingDown && this.goingUp) { // If we moved right.
      this.x += this.xStartSpeed; // Move right continuously.
    }
    if(this.x === width - 20 && this.goingUp) { // If we are a the right border.
      this.goingUp = false; // Set bool goingUp to false to restart this movement loop.
    }
  }*/
}