class Dino
{

	constructor()
	{
		this.position_X = 100;
		this.position_Y = 200;
		this.height = 50;
		this.bottom_Y = this.position_Y - this.height;


		this.gravity = 0.6;
		this.velocity = 0;
		this.lift = -10;
//		this.isDucking = false;


	}

	show()
	{
		fill(0)
		rect(this.position_X, this.bottom_Y - this.height , 20, this.height);
	}

	update()
	{
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
	}

	jump_low()
	{
	if (this.isGrounded())
		{
		this.velocity = this.lift;
		}	
	}

	jump_high()
	{
	if (this.isGrounded())
		{
		this.velocity = this.lift * 1.2;
		}	
	}


	isGrounded()
	{
		return (this.bottom_Y == 400);

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