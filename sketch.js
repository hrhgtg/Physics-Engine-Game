const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var boxx1,boxx2,boxx3,boxx4,boxx5,boxx6,boxx7,boxx8,boxx9,boxx10,boxx11,boxx12,boxx13,boxx14,boxx15,boxx16;
var b3x1,b3x2,b3x3,b3x4,b3x5,b3x6,b3x7,b3x8,b3x9,b3x10,b3x11,b3x12,b3x13,b3x14,b3x15,b3x16;
var p,rope;
var score = 0;
//var trajectory =[];

function preload() {
    Polygon = loadImage("polygon.png")
    bgImg = loadImage("Cherry Blossom.PNG")
}

function setup(){
    var canvas = createCanvas(1350,655);
    engine = Engine.create();
    world = engine.world;

    //first ground boxes :-
    ground1 = new Ground(585,550,240,7);
    ground2 = new Ground(1000,250,240,7);
    ground3 = new Ground(800,655-10,3550,20);

    //level 1
    box1 = new Boxblue(675,520,30,40);
    box1.shapeColor = "lightblue";
    box2 = new Boxblue(675-30,520,30,40);
    box3 = new Boxblue(675-60,520,30,40);
    box4 = new Boxblue(675-90,520,30,40);
    box5 = new Boxblue(675-120,520,30,40); 
    box6 = new Boxblue(675-150,520,30,40);
    box7 = new Boxblue(675-180,520,30,40);
    //level 2
    box8 = new Boxpink(675-30,480,30,40);
    box9 = new Boxpink(675-60,480,30,40);
    box10 = new Boxpink(675-90,480,30,40);
    box11 = new Boxpink(675-120,480,30,40);
    box12 = new Boxpink(675-150,480,30,40);
    //level 3
    box13 = new Boxwhite(675-60,440,30,40);
    box14 = new Boxwhite(675-90,440,30,40);
    box15 = new Boxwhite(675-120,440,30,40);
    //top
    box16 = new Box(675-90,400,30,40);

    //second ground boxes:-

    //level 4
    boxx1 = new Boxblue(1090,220,30,40);
    boxx2 = new Boxblue(1090-30,220,30,40);
    boxx3 = new Boxblue(1090-60,220,30,40);
    boxx4 = new Boxblue(1090-90,220,30,40);
    boxx5 = new Boxblue(1090-120,220,30,40);
    boxx6 = new Boxblue(1090-150,220,30,40);
    boxx7 = new Boxblue(1090-180,220,30,40);
    //level 5
    boxx8 = new Boxpink(1090-30,180,30,40);
    boxx9 = new Boxpink(1090-60,180,30,40);
    boxx10 = new Boxpink(1090-90,180,30,40);
    boxx11 = new Boxpink(1090-120,180,30,40);
    boxx12 = new Boxpink(1090-150,180,30,40);
    //level 6 
    boxx13 = new Boxwhite(1090-60,140,30,40);
    boxx14 = new Boxwhite(1090-90,140,30,40);
    boxx15 = new Boxwhite(1090-120,140,30,40);
    //top 2
    boxx16 = new Box(1090-90,100,30,40);
    //Creating Polygon
    p = Bodies.circle(120,200,50);
    World.add(world,p);
    
    //Creating band
    rope = new Rope(p, { x: 120, y: 200 });
 
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    textSize(50);
    //textFont("Brush Script MT")
    stroke("red")
    fill("#2255F6");
    text("Score  " + score, width-300, 50)

    imageMode(CENTER);
 //   p.scale = 3;
    image(Polygon, p.position.x, p.position.y,40,40)
    ground1.display();   
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    boxx1.display();
    boxx2.display();
    boxx3.display();
    boxx4.display();
    boxx5.display();
    boxx6.display();
    boxx7.display();
    boxx8.display();
    boxx9.display();
    boxx10.display();
    boxx11.display();
    boxx12.display();
    boxx13.display();
    boxx14.display();
    boxx15.display();
    boxx16.display();
    //score display
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();

    boxx1.score();
    boxx2.score();
    boxx3.score();
    boxx4.score();
    boxx5.score();
    boxx6.score();
    boxx7.score();
    boxx8.score();
    boxx9.score();
    boxx10.score();
    boxx11.score();
    boxx12.score();
    boxx13.score();
    boxx14.score();
    boxx15.score();
    boxx16.score();
 //   p.display();
    rope.display();

    //text
    textSize(50/2)
    //stroke("pink")
    strokeWeight(0.5)
    fill("black")
    text("Drag the hexagonal polygon and release it, to hit the boxes",width/2-300,20);
    text("Press space bar to get a second chance to hit the boxes",width/2-300,50);
    text("Reload the page or press 'ctrl_r' to get all the boxes ",width/2-300,80)
}

function keyPressed (){
    if (keyCode === 32) {
        Matter.Body.setPosition(p, { x: 120, y: 200 });
        rope.attach(p);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(p,{ x : mouseX, y : mouseY})
}

function mouseReleased(){
    rope.fly();
 //   gameState = "launched";
}
