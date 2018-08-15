
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
}const cv = {
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
};function line(x1, y1, x2, y2) {
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
function toRads(degrees) {
	return degrees * (180/Math.PI);
}
function toDegs(radians) {
	return radians * (Math.PI/180);
}
// Min max of range
function normalize(val, max, min) {
	return (val - min) / (max - min);
}
