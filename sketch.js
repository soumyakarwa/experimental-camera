var vid; 
var startPos = {x: 10, y: 10}; 
var increment = 20;
var pixelIndices = {x: [], y: []}; 
var rVal = 0; 
var gVal = 0; 
var bVal = 0;
var description = "Hi! This is a program that plays on the colors of the pixels captured by the webcam. To check it out, please enable your video camera by clicking the button below! Hit the r, g, b keys to see some magic! You can stop your video at any time."
var videoWidth = 0; 
var videoHeight = 0; 
var bodyFont; 
var startButton; 
var showVideo = false;
var makeVideo = true; 

function preload(){
  bodyFont = loadFont("./Roboto.ttf"); 
}

// BUILT ON THE IN-CLASS CODE BY REGINA FOUND HERE: https://editor.p5js.org/reginaflores/sketches/0cZdqLv8f
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(bodyFont); 
  myButton(); 
}

function draw() {
  background(255);
  if(showVideo){
    if(makeVideo){
      vid = createCapture(VIDEO); 
      vid.size(windowWidth - 250, windowHeight);
      vid.hide();
      for (let i = startPos.x; i < vid.width; i += increment) {
        pixelIndices.x.push(i); 
        pixelIndices.y.push(i); 
      }
      pixelIndices.x = shuffle(pixelIndices.x); 
      pixelIndices.y = shuffle(pixelIndices.y); 
      makeVideo = false; 
    }
    vid.loadPixels();
    for (let i = startPos.x; i < vid.width; i += increment) {
      for (let j = startPos.y; j < vid.height; j += increment) {
        let pindex = (i + (j * vid.width)) * 4;
        let r = vid.pixels[pindex + 0] + rVal;
        let g = vid.pixels[pindex + 1] + gVal;
        let b = vid.pixels[pindex + 2] + bVal;
        fill(r, g, b); 
        noStroke(); 
        ellipse(i, j, 20, 20); 
      }
    }
  }
  fill(0); 
  text(description, windowWidth - 250 + 30, 30, 200, 150);
}

function myButton(){
  startButton = createButton("video"); 
  startButton.position(windowWidth - 125 - 25, 180); 
  startButton.id('startButton');
  startButton.mouseClicked(() => {
    showVideo = !showVideo
    startButton.html(showVideo ? "stop" : "video");
  }); 
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
