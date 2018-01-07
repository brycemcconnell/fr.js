/*
Useful function library
fr: f-random - modular
v 0.1.0
2018.01.07
Bryce Alexander McConnell
*/

export const compareKey = (key, order) => {
	order == undefined ? order = 1 : ""
	return function (a,b) {
		let result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
		return result * order;
	}
};

export const random = (max, min) => {
	if (min == undefined) min = 0
	return Math.round(Math.random() * (max - min) + min);
};
// perhaps temp, or a different dom library
export const makeDom = (el, styles, parent = document.body, dynamicValue = "" ) => {
	const wrapper = {
		setValue: function(value) {
			this.element.children[1].innerHTML = value;
		},
		element: document.createElement(el)
	};
	const label = document.createElement('span');
	label.innerHTML = dynamicValue;
	const value = document.createElement('span');
	wrapper.element.appendChild(label);
	wrapper.element.appendChild(value);
	Object.entries(styles).forEach(([key, value]) => {
		wrapper.element.style[key] = value;
	});
	parent.appendChild(wrapper.element)
	return wrapper;
};

export const toRads = (degrees) => {
	return degrees * (180/Math.PI);
};
export const toDegs = (radians) => {
	return radians * (Math.PI/180);
};
// Min max of range
export const normalize = (val, max, min) => {
	return (val - min) / (max - min);
};