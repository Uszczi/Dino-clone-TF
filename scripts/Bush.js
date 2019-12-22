class Bush
{
	constructor(x, amount, size)
	{
		this.x = x;
		this.amount = amount;
		this.width = widthBush * amount;
		this.height = size * 20;



	}

	show()
	{
		fill(0);
		rect(this.x, 400 - this.height, this.width, this.height);
	}

	update()
	{
		this.x -= gameSpeed;
	}

	colision(dinoX, dino_bottom)
	{
		if(dinoX + 20 >= this.x && dinoX  <= this.x + this.width)
		{
			if(dino_bottom >= (400 - this.height))
			{
				return true;
			}
		}
		return false;
	}

		behindScene()
	{
		return (this.x < -50);
	}
}
