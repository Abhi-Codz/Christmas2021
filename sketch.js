//Naming variables
var star, starAnimation;
var soundFire;
let tree, treeAnimation;
let animation, animationAnimation;
let bgsmh;

function preload()
{
    //Loading animations
    treeAnimation = loadAnimation("TreeSnow.png", "TreeSnow1.png", "TreeSnow2.png", "TreeSnow3.png");
    animationAnimation = loadAnimation("ChristmasSanta1.png", "ChristmasSanta2.png");
    starAnimation = loadAnimation("ChristmasStar1.png", "ChristmasStar2.png");

}

function setup()
{
    createCanvas(560, 600);


    bgsmh = createSprite(265, 250, 450, 400);
    bgsmh.shapeColor = '#C12B26';

    
    tree = createSprite(300, 250);
    tree.addAnimation("maybe", treeAnimation);
    tree.scale = 0.4;

    animation = createSprite(100, 520);
    animation.addAnimation("wink", animationAnimation);
    animation.scale = 0.3;
    animation = createSprite(450, 520);
    animation.addAnimation("wink", animationAnimation);
    animation.scale = 0.3;

    star = createSprite(282, 180);
    star.addAnimation("lol", starAnimation);
    star.scale = 0.6;

    
}


function draw()
{
    background("#461126");
  
    drawSprites();

    //Adding text for hD
    stroke("lime");
    textSize(25);
    fill("lime");
    text("MERRY CHRISTMAS!!", 140, 490);

    //Adding text for AM
    stroke("black");
    textSize(15);
    fill("white");
    text("FROM-ABHINAV MISHRA", 320, 35);
}
