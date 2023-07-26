//your parameter variables go here!
let rect_width  = 40;
let rect_height = 40;

function setup_wallpaper(pWallpaper) {
  //DEVELOP_GLYPH
  //GRID_WALLPAPER
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 80;
  pWallpaper.grid_settings.cell_height = 80;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(150 + generateRandom(100), 150 + generateRandom(100), 150 + generateRandom(100)); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  createCard(generateRandom(4));
  stroke(0);
  translate(-70, -70)
  createDice(generateRandom(6));

  
}

function createCard(suit){
  if(suit == 0){
    fill(150 + generateRandom(100), 150 + generateRandom(100), 150 + generateRandom(100));
    rect(30 + (generateRandom(5)), 15 + (generateRandom(5)), 80, 100, 5);
    translate(23 + generateRandom(5), 5 + generateRandom(5) );
    spade();
    translate(50 + generateRandom(5), 65 + generateRandom(5) );
    spade();

  }
  else if (suit == 1){
    fill(150 + generateRandom(100), 150 + generateRandom(100), 150 + generateRandom(100));
    rect(30 + (generateRandom(5)), 15 + (generateRandom(5)), 80, 100, 5);
    translate(23 + generateRandom(5), 5 + generateRandom(5) );
    heart();
    translate(50 + generateRandom(5), 65 + generateRandom(5) );
    heart();
  }
  else if (suit == 2){
    fill(150 + generateRandom(100), 150 + generateRandom(100), 150 + generateRandom(100));
    rect(30 + (generateRandom(5)), 15 + (generateRandom(5)), 80, 100, 5);
    translate(23 + generateRandom(5), 5 + generateRandom(5) );
    diamond();
    translate(50 + generateRandom(5), 65 + generateRandom(5) );
    diamond();
  }
  else if (suit == 3){
    fill(150 + generateRandom(100), 150 + generateRandom(100), 150 + generateRandom(100));
    rect(30 + (generateRandom(5)), 15 + (generateRandom(5)), 80, 100, 5);
    translate(23 + generateRandom(5), 5 + generateRandom(5) );
    club();
    translate(50 + generateRandom(5), 65 + generateRandom(5) );
    club();
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




function createDice(generateRandom2){
  if(generateRandom2 == 0){
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    rect(40 ,40, rect_width, rect_height);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(60, 60, 10, 10);
  }
  else if (generateRandom2 == 1){
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    rect(40 ,40, rect_width, rect_height);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 50, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 70, 10, 10);

  }
  else if (generateRandom2 == 2){
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    rect(40 ,40, rect_width, rect_height);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 50, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 70, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(60, 60, 10, 10);
  }
  else if (generateRandom2 == 3){
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    rect(40 ,40, rect_width, rect_height);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 50, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 70, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 70, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 50, 10, 10);
  }
  else if (generateRandom2 == 4){
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    rect(40 ,40, rect_width, rect_height);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 50, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 70, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 70, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 50, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(60, 60, 10, 10);
  }
  else if (generateRandom2 == 5){
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    rect(40 ,40, rect_width, rect_height);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 47, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 73, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 73, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 47, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(50, 60, 10, 10);
    fill(200 + generateRandom(50), 200 + generateRandom(50), 200 + generateRandom(50))
    ellipse(70, 60, 10, 10);
  }
}

function generateRandom(maxLimit = 6){
  let rand = Math.random() * maxLimit;
  console.log(rand); // say 99.81321410836433

  rand = Math.floor(rand); // 99

  return rand;
}