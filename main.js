function setup() {
  canvas = createCanvas(645,490);
  canvas.position(635,222);
  video = createCapture(VIDEO);
  video.size(645,490)
  video.hide();

}

function draw() {
    image(video, 100, 90, 440, 300);
    fill(255,153,153);
    stroke(255,153,153);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill(96,96,96);
    stroke(96,96,96);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('borderrr.png');
}

function modelLoaded(){
    console.log("PozeNet model is initialized");
}