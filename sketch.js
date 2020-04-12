function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(250);
  
  // Head
  fill(5,255,100);
  ellipse(150,150,100,100);

  
  //Body
  fill(5,35,100);
  ellipse(200,200,100,100);
  ellipse(250,250,100,100);

  //Legs
  stroke(255,150,100);
  line (173,242,100,200);
  line (225,293,115,270);
  line (239,169,190,100);
  line (300,250,280,125);
  
  //Eyes
  fill(255,30,100);
  rect(120,138,10,10);
  rect(140,125,10,10);
  
  //Arms2
  stroke(0);
  fill(3, 200, 150);
  arc(362, 55, 50, 50, 0, HALF_PI);
  arc(338, 55, 50, 50, 0, PI);
  
  //Body2
  fill(255,0,0);
  triangle(325, 100, 350, 50, 375, 100);
  
  //Head2
  fill(150);
  ellipse(350,50,50,45);
  
  //Legs2
  fill(50,30,255);
  rect(325,100,20,80);
  rect(353,100,20,80);
  
  // Bonus Challenge
   
  rect(30, 20, 55, 55, 20, 5, 20, 5);
  fill(255);
  text("junebug", 38, 55, 55, 20, 5, 20, 5);
  
  //2nd label
  fill(100,30,200);
  rect(230, 20, 55, 55, 20, 5, 20, 5);
  fill(255);
  text("the lady", 236, 55, 55, 20, 5, 20, 5);
}
