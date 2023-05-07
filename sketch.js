var box
function setup() {
  createCanvas(400,400);
  box = createSprite(100, 100, 50, 50)
}

function draw() 
{
  background(30);
  if (keyDown("right")) {
    box.x = box.x + 2
  }
drawSprites()
}




