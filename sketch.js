var vid; 
var startPos = {x: 10, y: 10}; 
var increment = 20;
var pixelIndices = {x: [], y: []}; 
var rVal = 0; 
var gVal = 0; 
var bVal = 0;

// BUILT ON THE IN-CLASS CODE BY REGINA FOUND HERE: https://editor.p5js.org/reginaflores/sketches/0cZdqLv8f
function setup() {
  createCanvas(windowWidth, windowHeight);
  vid = createCapture(VIDEO); 
  vid.size(windowWidth, windowHeight);
  vid.hide();
  for (let i=startPos.x; i < vid.width; i+=increment) {
    pixelIndices.x.push(i); 
    pixelIndices.y.push(i); 
  }
  pixelIndices.x = shuffle(pixelIndices.x); 
  pixelIndices.y = shuffle(pixelIndices.y); 
}

function draw() {
  background(0);
  vid.loadPixels();
  let colors = []; 
  for (let i=startPos.x; i < vid.width; i+=increment) {
    for (let j=startPos.y; j < vid.height; j+=increment) {
      let pindex = (i + (j * vid.width))* 4;
      let r = vid.pixels[pindex + 0] + rVal;
      let g = vid.pixels[pindex + 1] + gVal;
      let b = vid.pixels[pindex + 2] + bVal;
      fill(r, g, b); 
      ellipse(i, j, 20, 20); 
    }
  }
}

function keyTyped(){
  switch(key){
    case("r"):
    rVal+=10; 
    break; 
    case("g"):
    gVal+=10; 
    break; 
    case("b"):
    bVal+=10; 
    break; 
  }
}
