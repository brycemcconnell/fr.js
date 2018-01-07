/*
Useful function library
fr: f-random
v 0.1.0
2018.01.07
Bryce Alexander McConnell
*/
const fr = {
	// For using with Array.prototype.sort()
	compareKey(key, order) {
		order == undefined ? order = 1 : "";
		return function (a,b) {
			let result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
			return result * order;
		}
	},
	random(max, min) {
		if (min == undefined) min = 0;
		return Math.round(Math.random() * (max - min) + min);
	},
	toRads(degrees) {
		return degrees * (180/Math.PI);
	},
	toDegs(radians) {
		return radians * (Math.PI/180);
	},
	// Min max of range
	normalize(val, max, min) {
		return (val - min) / (max - min);
	},
};

// Isometric view in three js
// camera.rotation.order = 'YXZ';
// camera.rotation.y = 45 * (Math.PI/180)
// camera.rotation.x = -Math.atan(1 / Math.sqrt(2));
