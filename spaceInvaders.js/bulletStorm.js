function bulletStorm(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.speed = -10;
    
  this.deleteBullet = false;
  
  this.display = function() {
    fill(255, random(100, 255), 0);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  this.hits = function(saucer) {
    let distance = dist( this.x, this.y, saucer.x, saucer.y);
    if (distance < this.r + saucer.r) {
      return true;
    } else {
      return false;
    } 
  }
  
  this.youTooBullets = function() {
    this.deleteBullet = true;
  }
  
  this.move = function() {
    this.y += this.speed;
  }
}