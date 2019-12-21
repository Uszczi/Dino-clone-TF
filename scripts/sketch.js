//Zmienne zwiazane z sama gra
let sizeOfBush = [1, 1, 1, 2, 2, 3];
let smallOrHigh = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
let widthBush = 15;
let gameSpeed = 6;
let gameAdjuster = 0.01;
let counter = 0;






let bush = [];
//Podmienic za dino
//Dodac pierwsze mozgi
//Zmienic z jednego gracza na wielu
//funkcja fitness w dino 
//Kasowanie krzakow po wyjsciu
//Funkcje skakania z pozycji dino
let dino;

let activeDino = [];
let dinoFitness = [];
let DinoActiveBrain = [];
let DinoBrain = [];
let populationSize = 20;


function setup()
{
	let canvas	= createCanvas(1000,500);
	canvas.position(100,100);


/*
{
	
	for (let i = 0; i < 20; i++)
	{
	activeDino.push(new Dino);
	let brain = new FirstBrain;
	DinoActiveBrain.push(brain);
	DinoBrain.push(brain);

	}
	var kur = 5
*/

	//MAKE FIRST GENERATION
	dino = new Dino();
}




function draw()
{
		if (counter % 90 == 0)
		{
		let r = random(100, 300);
		let ss = random(sizeOfBush);
		let qwe = random(smallOrHigh);
		bush.push(new Bush(1000 + r, ss, qwe));
		counter = 0;
		}

	counter += 1;

	background(189,96,96);
	line(0, 400, 1000, 400);

	dino.update();
	dino.show();


	for (let i = 0; i < bush.length; i++)
	{
		console.log(bush.length);
		bush[i].update();
		bush[i].colision(dino.position_X, dino.bottom_Y);
		bush[i].show();
	}

	for (let i = bush.length - 1; i >= 0; i--)
	{
		if (bush[i].behindScene())
		{
			bush.splice(i, 1);
		}
	}
//	gameSpeed =gameSpeed + gameSpeed * gameAdjuster;
}





/*//To control dino manually
function keyPressed()
{
	dino.whatAmIDoing(keyCode);
}

//To control dino manually
function keyReleased()
{
	if (keyCode === 83)
	{
		dino.stopDucking()
	}
}*/