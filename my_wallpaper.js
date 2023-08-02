
//your parameter variables go here!
let rect_width  = 40;
let rect_height = 40;
let rect_round = 5;
let diceRot;
let newRand = noise(100);
let cardNums;

function setup_wallpaper(pWallpaper) {
  //DEVELOP_GLYPH
  //GRID_WALLPAPER
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
  pWallpaper.grid_settings.cell_width  = 80;
  pWallpaper.grid_settings.cell_height = 80;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(150, 50, 50); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  createCard(generateRandom(4), generateRandom(720) * (-generateRandom(3)));
  stroke(0);
  createDice(generateRandom(6), generateRandom(720), 0, 250);
  

  
}
function cardNum(randCardNum, suit){
  if (randCardNum == 1){
    text(2, 34, 32)
    push();
      translate(18, 55)
      suit ();
    pop();
    push();
      translate(18, 0);
      suit();
    pop();
  }
  else if (randCardNum == 2){
    text(3, 34, 32)
    push();
      translate(18, 55)
      suit ();
    pop();
    push();
      translate(18, 0);
      suit();
    pop();
    push();
      translate(18, 27);
      suit();
    pop();
  } 
  else if (randCardNum == 3){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
  }
  else if (randCardNum == 4){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
    push();
      translate(18, 27);
      suit();
    pop();
  } 
  else if (randCardNum == 5){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
    push();
      translate(35, 27);
      suit();
    pop();
    push();
      translate(5, 27);
      suit();
    pop();
  }
  else if (randCardNum == 6){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
    push();
      translate(35, 27);
      suit();
    pop();
    push();
      translate(5, 27);
      suit();
    pop();
    push();
      translate(20, 27);
      suit();
    pop();
  } 
  else if (randCardNum == 7){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
    push();
      translate(35, 27);
      suit();
    pop();
    push();
      translate(5, 27);
      suit();
    pop();
    push();
      translate(20, 13);
      suit();
    pop();
    push();
      translate(20, 40);
      suit();
    pop();
  }
  else if (randCardNum == 8){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
    push();
      translate(35, 37);
      suit();
    pop();
    push();
      translate(5, 18);
      suit();
    pop();
    push();
      translate(35, 18);
      suit();
    pop();
    push();
      translate(5, 37);
      suit();
    pop();
    push();
      translate(18, 27);
      suit();
    pop();
  } 
  else if (randCardNum == 9){
    push();
      translate(5, 55)
      suit ();
    pop();
    push();
      translate(5, 0);
      suit();
    pop();
    push();
      translate(35, 0);
      suit();
    pop();
    push();
      translate(35, 55)
      suit ();
    pop();
    push();
      translate(35, 37);
      suit();
    pop();
    push();
      translate(5, 18);
      suit();
    pop();
    push();
      translate(35, 18);
      suit();
    pop();
    push();
      translate(5, 37);
      suit();
    pop();
    push();
      translate(20, 10);
      suit();
    pop();
    push();
      translate(20, 45);
      suit();
    pop();
  }

  

}

//creating the suits
function createCard(suit, rot){
  //spades
  if(suit == 0){
    rotate(rot)
    strokeWeight(1.5);
    fill(150);
    push()
    //shadows
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(30, 15, 80, 100, 5);
    pop()
    rect(30, 15, 80, 100, 5);
    push()
      translate(27, 10);
      push()
        scale(0.6)
        spade();
      pop()
      cardNum(generateRandom(9)+1, spade);
    pop();
    push();
      translate(82, 87);
      scale(0.6)
      spade();
    pop();

  }
  //hearts
  else if (suit == 1){
    rotate(rot)
    strokeWeight(1.5);
    fill(150);
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(30, 15, 80, 100, 5);
    pop()
    rect(30, 15, 80, 100, 5);
    push()
      translate(27, 10);
      push()
        scale(0.6)
        heart();
      pop()
      cardNum(generateRandom(9)+1, heart);
    pop();
    push();
      translate(82, 87);
      scale(0.6)
      heart();
    pop();
  }
  //diamonds
  else if (suit == 2){
    rotate(rot)
    strokeWeight(1.5);
    fill(150);
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(30, 15, 80, 100, 5);
    pop()
      rect(30, 15, 80, 100, 5);
      push()
      translate(27, 10);
      push()
        scale(0.6)
        diamond();
      pop()
      cardNum(generateRandom(9)+1, diamond);
    pop();
    push();
      translate(82, 87);
      scale(0.6)
      diamond();
    pop();
  }
  //clubs
  else if (suit == 3){
    rotate(rot)
    strokeWeight(1.5);
    fill(150);
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(30, 15, 80, 100, 5);
    pop()
    rect(30, 15, 80, 100, 5);
    push()
      translate(27, 10);
      push()
        scale(0.6)
        club();
      pop()
      cardNum(generateRandom(9)+1, club);
    pop();
    push();
      translate(82, 87);
      scale(0.6)
      club();
    pop();
  }
  
}

//creates the function for the suits

function spade(){
  noStroke();
  fill(0);
  triangle(31.7, 30, 18.3, 30, 25, 20)
  ellipse(27.5, 29, 8, 8);
  ellipse(22.5, 29, 8, 8);
  rect(23.5, 30, 2, 5);
}


function heart(){
  noStroke();
  fill(200, 70, 70);
  triangle(31, 28, 19, 28, 25, 35)
  ellipse(27.5, 26, 8, 8);
  ellipse(22.5, 26, 8, 8);
}

function diamond(){
  noStroke();
  fill(200, 70, 70);
  triangle(30, 25, 20, 25, 25, 15)
  triangle(30, 25, 20, 25, 25, 35)

}

function club(){
  noStroke();
  fill(0);
  triangle(28, 29, 22, 29, 25, 22)
  ellipse(28.8, 21.3, 8, 8);
  ellipse(21.2, 21.3, 8, 8);
  ellipse(25, 17, 8, 8);

}




function createDice(generateRandom2, diceRot, color, colorAgain){
  if(generateRandom2 == 0){
    rotate(diceRot);
    fill(colorAgain)
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(40 ,40, rect_width, rect_height, rect_round);
    pop()
    rect(40 ,40, rect_width, rect_height, rect_round);
    fill(color);
    ellipse(60, 60, 10, 10);
  }
  else if (generateRandom2 == 1){
    rotate(diceRot);
    fill(colorAgain)
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(40 ,40, rect_width, rect_height, rect_round);
    pop()
    rect(40 ,40, rect_width, rect_height, rect_round);
    fill(color);
    ellipse(50, 50, 10, 10);
    ellipse(70, 70, 10, 10);

  }
  else if (generateRandom2 == 2){
    rotate(diceRot);
    fill(colorAgain)
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(40 ,40, rect_width, rect_height, rect_round);
    pop()
    rect(40 ,40, rect_width, rect_height, rect_round);
    fill(color);
    ellipse(50, 50, 10, 10);
    ellipse(70, 70, 10, 10);
    ellipse(60, 60, 10, 10);
  }
  else if (generateRandom2 == 3){
    rotate(diceRot);
    fill(colorAgain)
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(40 ,40, rect_width, rect_height, rect_round);
    pop()
    rect(40 ,40, rect_width, rect_height, rect_round);
    fill(color);
    ellipse(50, 50, 10, 10);
    ellipse(50, 70, 10, 10);
    ellipse(70, 70, 10, 10);
    ellipse(70, 50, 10, 10);
  }
  else if (generateRandom2 == 4){
    rotate(diceRot);
    fill(colorAgain)
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(40 ,40, rect_width, rect_height, rect_round);
    pop()
    rect(40 ,40, rect_width, rect_height, rect_round);
    fill(color);
    ellipse(50, 50, 10, 10);
    ellipse(50, 70, 10, 10);
    ellipse(70, 70, 10, 10);
    ellipse(70, 50, 10, 10);
    ellipse(60, 60, 10, 10);
  }
  else if (generateRandom2 == 5){
    rotate(diceRot);
    fill(colorAgain)
    push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      rect(40 ,40, rect_width, rect_height, rect_round);
    pop()
    rect(40 ,40, rect_width, rect_height, rect_round);
    fill(color);
    ellipse(50, 47, 10, 10);
    ellipse(50, 73, 10, 10);
    ellipse(70, 73, 10, 10);
    ellipse(70, 47, 10, 10);
    ellipse(50, 60, 10, 10);
    ellipse(70, 60, 10, 10);
  }
}

function generateRandom(maxLimit = 6){
  let rand = Math.random() * maxLimit;
  console.log(rand); // say 99.81321410836433

  rand = Math.floor(rand); // 99

  return rand;
}