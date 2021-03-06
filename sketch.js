//Declaring the variables.
var stone,sling,ground,stand1,stand2,stonePos;
var giveUp,GiveUpImg,stage,variable;

//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Function for preloading.
function preload() {
  //Loading images to 2 variables.
  GiveUpImg = loadImage("GiveUp.png");
  attackImg = loadImage("attack.png");
}

//Function for setting up.
function setup() {
  // Creating the canvas area.
  createCanvas(1350, 700);

  //Creating an engine in the variable 'engine'.
  engine = Engine.create();
  //Storing engine's world in the variable world.
  world = engine.world;
  
  //Setting values for three variables.
  stage = 1;
  variable = 1;
  stonePos = 1;

  //Creating the bodies.
  stone = new Stone(120,210);
  sling = new SlingShot(stone.body,{x:120,y:210});
  ground = new Ground(width/2,650,1350,20);
  stand1 = new Ground(700,300,350,20);
  stand2 = new Ground(1100,500,300,20);
  //Level1 boxes
  //First line
  box1 = new BoxO(610,290);
  box2 = new BoxO(640,290);
  box3 = new BoxO(670,290);
  box4 = new BoxO(700,290);
  box5 = new BoxO(730,290);
  box6 = new BoxO(760,290);
  box7 = new BoxO(790,290);
  //Second line
  box8 = new BoxG(640,250);
  box9 = new BoxG(670,250);
  box10 = new BoxG(700,250);
  box11 = new BoxG(730,250);
  box12 = new BoxG(760,250);
  //Third line
  box13 = new BoxB(670,210);
  box14 = new BoxB(700,210);
  box15 = new BoxB(730,210);
  //Top box
  box16 = new BoxP(700,170);
  //Level2 boxes
  //First line
  box17 = new BoxP(1010,490);
  box18 = new BoxP(1040,490);
  box19 = new BoxP(1070,490);
  box20 = new BoxP(1100,490);
  box21 = new BoxP(1130,490);
  box22 = new BoxP(1160,490);
  box23 = new BoxP(1190,490);
  //Second line
  box24 = new BoxB(1040,450);
  box25 = new BoxB(1070,450);
  box26 = new BoxB(1100,450);
  box27 = new BoxB(1130,450);
  box28 = new BoxB(1160,450);
  //Third line
  box29 = new BoxG(1070,410);
  box30 = new BoxG(1100,410);
  box31 = new BoxG(1130,410);
  //Top box
  box32 = new BoxO(1100,370);

  //Creating a sprite for the variable 'attack'.
  attack = createSprite(1220,80,40,20);
  //Adding image to it.
  attack.addImage(attackImg);
  //Adjusting its size.
  attack.scale = 0.4;
  //Making it invisible.
  attack.visible = false;

  //Creating a sprite for the variable 'giveUp'.
  giveUp = createSprite(1220,80,40,20);
  //Adding image to it.
  giveUp.addImage(GiveUpImg);
  //Adjusting its size.
  giveUp.scale = 0.4;
  //Making it invisible.
  giveUp.visible = false;

  //Running the previously created engine.
	Engine.run(engine);  
}

//Draw loop function.
function draw() {
  //Setting rect mode as CENTER.
  rectMode(CENTER);
  //Setting ellipse mode as RADIUS.
  ellipseMode(RADIUS);
  //Setting background color to black.
  background("black");

  //Changing variable's value as per the different conditions.
  if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300 && box17.body.position.y > 500 && box18.body.position.y > 500 && box19.body.position.y > 500 && box20.body.position.y > 500 && box21.body.position.y > 500 && box22.body.position.y > 500 && box23.body.position.y > 500 && box24.body.position.y > 500 && box25.body.position.y > 500 && box26.body.position.y > 500 && box27.body.position.y > 500 && box28.body.position.y > 500 && box29.body.position.y > 500 && box30.body.position.y > 500 && box31.body.position.y > 500 && box32.body.position.y > 500) {
    variable = 3;
    //Destroying giveUp sprite.
    giveUp.destroy();
  }
  else if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300) {
    variable = 2;
  }
  else {
    variable = 1;
  }

  //Changing stonePos's value as per the different conditions.
  if(stone.body.position.x < 240 && stone.body.position.x > 0 && stone.body.position.y < 420 && stone.body.position.y > 0) {
    stonePos = 2;
  }
  else {
    stonePos = 1;
  }

  //Assigning functions when stage's value is 1.
  if(stage === 1) {
    //Displaying text.
    fill("red");
    textStyle(ITALIC && BOLD);
    textFont("georgia");
    textSize(30);
    textAlign(CENTER);
    text('Welcome to "The Revenge: Part I"',675,100);
    fill("white");
    textSize(20);
    textStyle(BOLD);
    textFont("segoe print");
    text("This is the story of a defeated King who has lost his empire and his family in a battle with his own selfish brother.",675,150);
    text("The king wants to take revenge from his evil brother who has now become the new king of the kingdom and has prisoned",675,180);
    text("his own family. The king plans to siege the palace and get back his throne with your help. You are the only trustworthy",675,210);
    text("person who can help him.",675,240);
    text("You need to destroy the walls with the help of hexagonal shaped stones to get into the palace and succeed in your",675,340);
    text("mission. Drag and release the stone towards the walls with the help of your mouse to destroy the walls. There are two",675,370);
    text("levels, If you destroy level 1 walls, you can get into prison and free the king's family. If you destroy both level 1",675,400);
    text("and level 2 walls, you can get into the main palace and get back the throne for the king. You can quit anytime if you",675,430);
    text("think you are not capable of destroying the walls by clicking on the 'GIVE UP' button at the top right of the screen.",675,460);
    text("Once you destroy both level 1 and level 2 walls, the 'GIVE UP' button will change to 'ATTACK' button. Click on 'ATTACK'",675,490);
    text("and complete your mission. So, are you ready for the battle? Press 'Enter' to start your mission.",675,520);
    fill("red");
    textFont("courier new");
    text("Instructions for the Game:",180,300);

    //Changing stage's value to 2 when 'enter' key is pressed.
    if(keyDown(ENTER)) {
      stage = 2;
    }
  }

  //Assigning functions when stage's value is 2.
  else if(stage === 2) {
    //Displaying all the bodies.
    stone.display();
    ground.display();
    stand1.display();
    stand2.display();
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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    //Making giveUp sprite visible.
    giveUp.visible = true;
    attack.visible = true;

    //Displaying text for info.
    fill("white");
    textSize(18);
    textFont("segoe script");
    textAlign(CENTER);
    text("Level 1 Wall",700,305);
    text("Level 2 Wall",1100,505);
    fill("white");
    textSize(20);
    textStyle(BOLD);
    textFont("segoe print");
    text("TIP: You can reuse your stone by pressing the 'spacebar' key.",320,70);

    //Changing stage's value to 3 when mouse button is pressed over giveUp sprite or attack sprite.
    if(mousePressedOver(giveUp) || mousePressedOver(attack)) {
      stage = 3;
    }
  }

  //Assigning functions when stage's value is 3.
  else if(stage === 3) {
    //Displaying different texts as per the different conditions.
    if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300 && box17.body.position.y > 500 && box18.body.position.y > 500 && box19.body.position.y > 500 && box20.body.position.y > 500 && box21.body.position.y > 500 && box22.body.position.y > 500 && box23.body.position.y > 500 && box24.body.position.y > 500 && box25.body.position.y > 500 && box26.body.position.y > 500 && box27.body.position.y > 500 && box28.body.position.y > 500 && box29.body.position.y > 500 && box30.body.position.y > 500 && box31.body.position.y > 500 && box32.body.position.y > 500) {
      if(variable === 3) {
        fill("red");
        textSize(35);
        textFont("segoe print");
        textAlign(CENTER);
        text("King: Well done! You have completed your mission successfully.",675,200);
        text("Thanks a lot!!",675,240);
        fill("white");
        textFont("courier new");
        textSize(20);
        text("(Press 'Ctrl + R' to restart)",675,300);
      }
    }
    else if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300) {
      if(variable === 2) {
        fill("red");
        textSize(35);
        textFont("segoe print");
        textAlign(CENTER);
        text("King: Thanks a lot for saving my family. But the",675,200);
        text("Empire is still in danger. Better luck next time.",675,240);
        fill("white");
        textFont("courier new");
        textSize(20);
        text("(Press 'Ctrl + R' to restart)",675,300); 
      } 
    }
    else if(box1.body.position.y < 500 || box2.body.position.y < 500 || box3.body.position.y < 500 || box4.body.position.y < 500 || box5.body.position.y < 500 || box6.body.position.y < 500 || box7.body.position.y < 500 || box8.body.position.y < 500 || box9.body.position.y < 500 || box10.body.position.y < 500 || box11.body.position.y < 500 || box12.body.position.y < 500 || box13.body.position.y < 500 || box14.body.position.y < 500 || box15.body.position.y < 500 || box16.body.position.y < 500 || box17.body.position.y < 500 || box18.body.position.y < 500 || box19.body.position.y < 500 || box20.body.position.y < 500 || box21.body.position.y < 500 || box22.body.position.y < 500 || box23.body.position.y < 500 || box24.body.position.y < 500 || box25.body.position.y < 500 || box26.body.position.y < 500 || box27.body.position.y < 500 || box28.body.position.y < 500 || box29.body.position.y < 500 || box30.body.position.y < 500 || box31.body.position.y < 500 || box32.body.position.y < 500) {
      if(variable === 1) {
        fill("red");
        textSize(35);
        textFont("segoe print");
        textAlign(CENTER);
        text("King: We failed! I don't want to lose anything else,",675,200);
        text("Fall Back!! Retreat our forces!",675,240);
        fill("white");
        textFont("courier new");
        textSize(20);
        text("(Press 'Ctrl + R' to restart)",675,300);
      }
    }
  }

  //Displaying the sprites.
  drawSprites();
}

//keyPressed function.
function keyPressed() {
  //Repositioning the stone when spacebar is pressed.
  if(keyCode === 32) {
    sling.reposition(stone.body);
    Body.setPosition(stone.body,{x:120,y:210});
  }
}

//mouseDragged function.
function mouseDragged() {
 //Setting stone's positions equal to mouse's positions under certain conditions.
 if(stage === 2 && stonePos === 2) {
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
}

//mouseReleased function.
function mouseReleased() {
  if(stage === 2 && stonePos === 2) {
    //Calling the 'fly' function for sling under certain conditions.
    sling.fly();
  }
}