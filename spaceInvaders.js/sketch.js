const width = 1920;
const height = 969;
const saucersNumber = 20;

let flyingSaucers = []; // Declare saucers object;
let fighterShip;

function sketch() {
  createCanvas(width, height);
  
  for(let i = 0; i < saucersNumber; i++) {
    flyingSaucers[i] = new saucers(); //Create saucers objects.
  }
  
  fighterShip = new spaceShip();
  
}

function draw() {
  background(0);
  
  for (let i = 0; i < saucersNumber; i++) {
    flyingSaucers[i].display();
  }
 
  for (let i = 0; i < saucersNumber; i++) {
    flyingSaucers[i].move();
  }
  
  fighterShip.keyPressed();
 
  fighterShip.display(); 
}