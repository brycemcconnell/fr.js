
let mouseDown = false;
const CONTROLS = {
	mouse: false,
	mouselook: true,
	xmove: true,
	zmove: true,
	ymove: true,
	jump: true,
	mouselock: true
};

function initControls() {

	window.addEventListener('keydown', function (e) {
		if (CONTROLS.xmove) {
			
			if (e.key == 'd') {
				e.preventDefault();
				velocity.x = 0.05;
			} else if (e.key == 'a') {
				e.preventDefault();
				velocity.x = -0.05;
			}
		}
		if (CONTROLS.zmove) {
			if (e.key == 's') {
				e.preventDefault();
				velocity.z = 0.05;
			} else if (e.key == 'w') {
				e.preventDefault();
				velocity.z = -0.05;
			}
		}
		if (CONTROLS.ymove) {
			if (e.key == 'q') {
				e.preventDefault();
				velocity.y = 0.05;
			} else if (e.key == 'z') {
				e.preventDefault();
				velocity.y = -0.05;
			}
		}
		if (CONTROLS.jump) {
			if (e.key == ' ' && !jumping) {
				e.preventDefault();
				// console.log('jump start');
				jumping = true;
				jumpVelocity = 0.1;
			}
		}
	});

	window.addEventListener('keyup', function (e) {
		if (e.key == 'a' || e.key == 'd') {
			velocity.x = 0;
		}
		if (e.key == 'w' || e.key == 's') {
			velocity.z = 0;
		}
		if (e.key == 'q' || e.key == 'z') {
			velocity.y = 0;
		}
	});



	window.addEventListener("mousedown", function (e) {
		if (CONTROLS.mouse) {
			mouseDown = true;
		}
	});
	window.addEventListener("mouseup", function (e) {
		mouseDown = false;
	});

	window.addEventListener("mousemove", function (e) {

		if (CONTROLS.mouselook && document.pointerLockElement) {
			camera.rotation.x -= e.movementY / 1000;
			camera.rotation.y -= e.movementX / 1000;
		}
		// console.log(e.movementX, e.movementY);
	});
}function toRads(degrees) {
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
function line(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.closePath();
}
function clamp(x, min, max) {
	return Math.min(Math.max(x, min), max);
}
function random(max, min) {
	if (min == undefined) min = 0;
	return Math.round(Math.random() * (max - min) + min);
}
function getMousePosition(canvas, e) {
	const rect = canvas.getBoundingClientRect();
	return {
		x: (e.clientX - rect.left) * (canvas.width / rect.width),
		y: (e.clientY - rect.top) * (canvas.height / rect.height)
	};
}
function compareKey(key, order) {
	order = order == undefined ? 1 : order;
	return function (a,b) {
		let result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
		return result * order;
	};
}

// Min max of range
function normalize(val, max, min) {
	return (val - min) / (max - min);
}
