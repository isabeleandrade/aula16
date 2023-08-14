//código correto mas não executa
let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y


function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color (random(0, 255), random(0, 2555), random(0, 255) );
  posicaoHrizontal = 200;
  posicaoVertical = 200;
}

function draw(){
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical,50);
  
  if(mouseX < posicaoHorizontal) {
  poicaoHorizontal--;
  }
  
  
  if(mouseY > posicaoHorizontal) {
  posicaoHorizontal++;
    
  }
  
  if(mouseX < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }

  
  if(mouseIsPressed) {
cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
}