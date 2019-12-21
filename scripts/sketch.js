//Game variable
let sizeOfBush = [1, 1, 1, 2, 2, 3];
let smallOrHigh = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
let widthBush = 15;
let gameSpeed = 6;
let gameAdjuster = 0.01;
let counter = 0;
let frameCounter = 0;
let bush = [];



//Podmienic za dino
//Dodac pierwsze mozgi
//Zmienic z jednego gracza na wielu
//funkcja fitness w dino
//Funkcje skakania z pozycji dino

//Neural variable
let dinos = [];
let deadDinos = [];
let populationSize = 20;
let mutationRate = 0.1;


function setup()
{
	let canvas	= createCanvas(1000,500);
	canvas.position(100,100);

		tf.setBackend('cpu');

		for(let i = 0; i < populationSize; i++)
		{
			dinos.push(new Dino());
		}
}




function draw(){
	background(189,96,96);
	line(0, 400, 1000, 400);

	spawnBarrier();
	bushUpdate();
	destroyBush();

	for (let dino of dinos){
//		dino.think();
		dino.update();
	}

	if(dinos.length === 0){
		counter = 0;
//		nextGeneration();
		bush = [];
	}



}









function spawnBarrier(){
		if (frameCounter % 90 == 0)
		{
		let r = random(100, 300);
		let ss = random(sizeOfBush);
		let qwe = random(smallOrHigh);
		bush.push(new Bush(1000 + r, ss, qwe));
		frameCounter = 0;
		}
		frameCounter++;
}

function bushUpdate() {
	for (let i = 0; i < bush.length; i++){
			bush[i].update();
			bush[i].show();
			for (let j = 0; j < dinos.length; j++){
					if(bush[i].colision(dinos[j].position_X, dinos[j].bottom_Y)){
							deadDinos.push(dinos.splice(j, 1));
					}
				}
		}
}

function destroyBush(){
	for (let i = bush.length - 1; i >= 0; i--){
		if (bush[i].behindScene()){
			bush.splice(i, 1);
		}
	}
}



//To control dino manually
/*
function keyPressed()
{
	dino.whatAmIDoing(keyCode);
}

function keyReleased()
{
	if (keyCode === 83)
	{
		dino.stopDucking()
	}
}
*/
