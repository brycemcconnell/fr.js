const cv = {
	eularTo(source) {
		let heading = -source; // negative makes clockwise
		let radians = heading > 0 ? heading : (2 * Math.PI) + heading;
		let degrees = THREE.Math.radToDeg(radians);
		let nice = Math.abs(degrees % 360);
		return nice;
	},
	compass: document.getElementById("compass"),
	compassUL: Array.from(compass.firstElementChild.children),
	// console.log(compassUL);
	getCardinal(source) {
		let direction = Math.round(source / 45);
			// direction == 8 ? direction = 0 : direction;
			direction %= 8;
		let dirRight = direction + 1;
			dirRight %= 8;
		let dirLeft = direction - 1;
			// dirLeft == -1 ? dirLeft = 7 : dirLeft;
			dirLeft = (Math.abs(dirLeft) + 8) % 8;

		
		
		let cardinal;
		this.compassUL.forEach ((item) => { item.className = ''; });
		this.compassUL[direction].classList.add('big');
		this.compassUL[dirRight].classList.add('medium');
		this.compassUL[dirLeft].classList.add('medium');
		switch (direction) {
			case 0:
				cardinal = 'North';
				break;
			case 7:
				cardinal = 'North-west';
				break;
			case 6:
				cardinal = 'West';
				break;
			case 5:
				cardinal = 'South-west';
				break;
			case 4:
				cardinal = 'South';
				break;
			case 3:
				cardinal = 'South-east';
				break;
			case 2:
				cardinal = 'East';
				break;
			case 1:
				cardinal = 'North-east';
				break;
			default:
				cardinal = 'broken';
				break;
		}
		return cardinal;
	}
};