var saucersNumber = 10;

var fighterShip; // Declare sapceShip object.
var flyingSaucers = []; // Declare saucers object;
var bullets = []; // Declare bullets object.

let spaceImg;
let shipImg;
let saucerImg;

var gameShouldPause = false;

function preload() {
  // These images are not my own and I do not claim they are, I used google images and searched 'insert item here' png.
  spaceImg = loadImage('colorful-space.jpg');
  shipImg = loadImage('pixel-art-img.png');
  saucerImg = loadImage('synthwave-saucer.png');
}

function setup() {
  createCanvas(600, 600);
  
  fighterShip = new spaceShip();
  
  for(let i = 0; i < saucersNumber; i++) {
    flyingSaucers[i] = new saucers(i * 60 + 20, 20); // Create saucers objects.
  }
}

function keyPressed() {
  if(key === ' ' && !gameShouldPause) {
    var bullet = new bulletStorm(fighterShip.x, fighterShip.y - 40); // Create bullet objects.
    bullets.push(bullet); // Push bullet objects to bullets array.
  }
  if(gameShouldPause) {
    noLoop();
    if(key === ' ') {
      console.log("The celestial threat returns!")
      loop();
      setup();
      draw();
      gameShouldPause = false;
      fighterShip.selfDestruct = false;
      fighterShip.shipHealth = 5;
    }
  }
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(spaceImg, width / 2, height / 2, width, height);
  
  // Draw and move fighterShip.
  fighterShip.display();
  fighterShip.move();
  
  
  // Draw and move flyingSaucers.
  for (let i = 0; i < flyingSaucers.length; i++) {
    flyingSaucers[i].display();
    flyingSaucers[i].move();
  }
  
  // Draw and move bullets.
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].display(); // Display bullet objects.
    bullets[i].move(); // Move bullet objects.
    var score = 0;
    for (let j = 0; j < flyingSaucers.length; j++) {
      if(bullets[i].hits(flyingSaucers[j])) {
        flyingSaucers[j].getOutaHereSaucers();
        bullets[i].youTooBullets();
      }
    }
  }
  
  // Detects if ship is hit by saucer and determines game pause.
  for (let i = 0; i < flyingSaucers.length; i++) {
    if(fighterShip.hits(flyingSaucers[i])) {
      fighterShip.shipHealth -= 1;
      flyingSaucers.splice(i, 1);
      if(fighterShip.shipHealth === 0) {
        console.log("Your ship exploded! Hit SPACEBAR to play again.");
        gameShouldPause = true;
        fighterShip.selfDestruct = true;
      }
    }
  }
  
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].y === 0) {
      bullets[i].youTooBullets();
    }
    for (let j = 0; j < bullets.length; j++) {
      if (bullets[j].deleteBullet) {
        bullets.splice(j, 1);
      }
    }
  }
  
  
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].deleteBullet)  {
      bullets.splice(i, 1);
    }
    for (let j = 0; j < flyingSaucers.length; j++) {
      if (flyingSaucers[j].deleteSaucer) {
        if(fighterShip.shipHealth > 0) {
          flyingSaucers.splice(j, 1);
        } else if(fighterShip.shipHealth === 0) {
          flyingSaucers.splice(j, flyingSaucers.length);
        }
      }
    }
    if(flyingSaucers.length === 0 && !gameShouldPause) {
      for(let i = 0; i < saucersNumber; i++) {
        flyingSaucers[i] = new saucers(i * 60 + 20, 20); // Create saucers objects.
      }
    }
  }
  
  for(let i = 0; i < flyingSaucers.length; i++) { // Go through flyingSaucers array.
    if(flyingSaucers[i].y === height && flyingSaucers[i].x === width - 20) { // If saucers reach the bottom of screen.
      newSaucersAmount = flyingSaucers.length;
      flyingSaucers.splice(i, flyingSaucers.length); // Clear the flyingSaucers array.
      for (let j = 0; j < newSaucersAmount; j++) { // Go through the specified number of saucers.
        flyingSaucers[j] = new saucers(j * 60 + 20, 20); // Recreate saucers objects.
      } 
    }
  } 
}