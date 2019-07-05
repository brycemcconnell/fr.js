export const removeFromArray = (arr, elt) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1);
    }
  }
};


export function compareKey(key, order) {
	order = order == undefined ? 1 : order;
	return function (a,b) {
		let result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
		return result * order;
	};
}

export function find(array, key, value) {
  console.log(array);
  return array.find(item => item[key] === value);
}
