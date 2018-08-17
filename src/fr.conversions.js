function toRads(degrees) {
	return degrees * (180/Math.PI);
}
function toDegs(radians) {
	return radians * (Math.PI/180);
}

function angleToCircle(angleInDegrees) {
	return angleInDegrees % 360;
}

function modulo(dividend, modulus) {
	return (( dividend % modulus ) + modulus) % modulus;
}

/*
 * @param - {float} angle - Any angle between 0 to 360 in degrees 
 * @Returns {string} A cardinal direction where an angle of 0 is north.
*/
function getCardinal(angle) {
	angle = modulo(angle, 360);
	let direction = Math.round(angle / 45);
		// direction == 8 ? direction = 0 : direction;
		direction %= 8;
	let dirRight = direction + 1;
		dirRight %= 8;
	let dirLeft = direction - 1;
		// dirLeft == -1 ? dirLeft = 7 : dirLeft;
		dirLeft = (Math.abs(dirLeft) + 8) % 8;

	
	
	let cardinal;
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
			cardinal = 'unknown';
			break;
	}
	return cardinal;
}

module.exports.getCardinal = getCardinal;
