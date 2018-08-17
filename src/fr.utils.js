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
