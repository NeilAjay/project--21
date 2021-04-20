var surface1, surface2, surface3, surface4;
var Box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  
    Box = createSprite(random(10, 750), 300, 20, 20);
    Box.shapeColor = "white";
    Box.velocityX = 5;
    Box.velocityY = 5;
  
    surface1 = createSprite(100, 590, 180, 20);
    surface1 = createSprite(100, 590, 180, 20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300, 590, 180, 20);
    surface2.shapeColor = "orange";
  
    surface3 = createSprite(500, 590, 180, 20);
    surface3.shapeColor = "pink";
  
    surface4 = createSprite(700, 590, 180, 20);
    surface4.shapeColor = "green";
     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges=createEdgeSprites();

    Box.bounceOff(edges);
    if(Box.x < 0){
      music.stop();
      Box.velocityX = 5;
    }else if (Box.x > 800){
      music.stop();
      Box.velocityX = -5
    }

    //add condition to check if box touching surface and make it box
    if(surface4.isTouching(Box)){
      music.play();
      Box.shapeColor = "green";
      Box.bounceOff(surface4);
    }
  
    else if(surface3.isTouching(Box)){
      music.play();
      Box.shapeColor = "pink";
      Box.bounceOff(surface3);
    }
  
     else if(surface2.isTouching(Box)){
      music.play();
      Box.shapeColor = "orange";
      Box.velocityX = 0;
      Box.velocityY = 0;
    }
  
    else if(surface1.isTouching(Box)){
      music.play();
      Box.shapeColor = "blue";
      Box.bounceOff(surface1);
    }
  
    if(Box.y < 0){
      music.stop();
      Box.velocityY = 5;
    }
    drawSprites();
}
