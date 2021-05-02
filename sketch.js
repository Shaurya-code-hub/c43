  var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10;
  var bg;

function preload(){
  bg = loadImage("images/bg3.jpg");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
 maze1 = createSprite(105,40,200,10);
 maze1.shapeColor = "#F62217";

 maze2 = createSprite(105,100,200,10)
 maze2.shapeColor = "#F62217";

 maze3 = createSprite(306,100,10,200);
}


function draw() {
  background(bg);  
  drawSprites();
}

