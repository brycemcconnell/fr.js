
let mouseDown = false;
const CONTROLS = {
	mouse: false,
	mouselook: true,
	xmove: true,
	zmove: true,
	ymove: true,
	jump: true,
	mouselock: true
}

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
}