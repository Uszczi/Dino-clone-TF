class Dino {
	constructor(brain) {
		this.position_X = 100;
		this.position_Y = 200;
		this.height = 50;
		this.bottom_Y = this.position_Y - this.height;

		this.gravity = 0.6;
		this.velocity = 0;
		this.lift = -10;
//		this.isDucking = false;

		this.score = 0;
		this.fitness = 0;
		if(brain) {
			this.brain = brain.copy();
		} else {
			this.brain = new NeuralNetwork(4, 4, 2);
		}
	}

	show()
	{
		fill(0)
		rect(this.position_X, this.bottom_Y - this.height , 20, this.height);
	}

	update() {
		this.score++;
		this.velocity += this.gravity;

		if (this.velocity > 16)
		{
			this.velocity = 16;
		}


		if ((this.bottom_Y + this.velocity) > 400)
		{
			this.bottom_Y = 400;
			this.velocity = 0;

		}
		else
		{
		this.bottom_Y += this.velocity;
		}
		this.show();
	}

	dispose() {
		this.brain.dispose();
	}

	jump_low() {
	if (this.isGrounded())
		{
		this.velocity = this.lift;
		}
	}

	jump_high() {
	if (this.isGrounded())
		{
		this.velocity = this.lift * 1.2;
		}
	}

	isGrounded() {
		return (this.bottom_Y == 400);

	}

	mutate() {
		this.brain.mutate(mutationRate);
	}

	think(bush) {
		let closest = null;
		let closestD = Infinity;
		for (let i = 0; i < bush.length; i++) {
			let d = bush[i].x - this.position_X;
	//		console.log(d);
			if (d < closestD && d > 0 ) {
				closest = bush[i];
				closestD = d;
			}
		}

		let inputs = [];
		inputs[0] = closest.x;
		inputs[1] = this.bottom_Y;
		inputs[2] = closest.width;
		inputs[3] = closest.height;

		let output = this.brain.predict(inputs)
			if (output[0] > output[1]) {
				this.jump_low();
			}
		}




// To control dino manually
	// whatAmIDoing(key)
	// {
	// 	if (key === 81)
	// 	{
	// 		this.jump_low()
	// 	}
	// 	else if (key === 87)
	// 	{
	// 		this.jump_high()
	// 	}
	// 	else if(key === 83)
	// 	{
	// 		this.isDucking = true;
	// 	}
	// }

	//stopDucking(key)
	//{
	//	this.isDucking = false;
	//}
}
