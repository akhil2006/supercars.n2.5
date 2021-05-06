var canvas, backgroundImage;
var lgt 
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var sound;
var form, player, game;
var spikes
var cars, car1, car2, car3, car4;
var spikesGroup
var track, car1_img, car2_img, car3_img, car4_img;
var rank,playerrank
function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  spikes=loadImage("images/spikes.png")
  sound=loadSound('bgs2.mp3')
  ground = loadImage("../images/ground.png");
  lgt=loadImage("images/lgt.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
sound.loop()
spikesGroup=createGroup()
for (var i = 0;i < 5;i++) {
  x=random(200,displayWidth- 200)
  y=random(-height*4, height-300)
  obstacle = createSprite(x,y)
  obstacle.addImage(spikes)
  spikesGroup.add(obstacle)
  obstacle.scale =0.1

}

}


function draw(){
  background(lgt)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
