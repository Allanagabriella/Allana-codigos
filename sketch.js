let xBolinha = 200;
 let yBolinha = 200;
 let diametro = 10;
 let velocidadeXBolinha = 5;
 let velocidadeYBolinha = 3;

function setup() {
   createCanvas(400, 400);
}
function draw() {
  background(34,58,89); 
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    
    if (xBolinha > width || xBolinha < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}

