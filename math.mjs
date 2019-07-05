
export const normalize = function(val, max, min = 0) {
  return (val - min) / (max - min);
};

export function toRads(degrees) {
	return degrees * (180/Math.PI);
}
export function toDegs(radians) {
	return radians * (Math.PI/180);
}

export function angleToCircle(angleInDegrees) {
	return angleInDegrees % 360;
}

export function modulo(dividend, modulus) {
	return (( dividend % modulus ) + modulus) % modulus;
}

export function clamp(x, min, max) {
	return Math.min(Math.max(x, min), max);
}
export function random(max, min) {
	if (min == undefined) min = 0;
	return Math.round(Math.random() * (max - min) + min);
}