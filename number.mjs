/**
 * Number
 * Number manipulation class
 * All methods should not change the base value, only give a varied represenetation
 * of a number
 */
/**
 * 
 * @param {Number} num 
 * @param {Number} max 
 * @param {Number} min 
 */
export const reverseNumber = function(num, max, min = 0) {
  return (max + min) - num;
};
export const decToHex = function(dec) {
  return dec.toString(16);
};
export const hexToDec = function(hex) {
  hex = hex.split(/\./);
  if (hex.length > 1) {
    const len = hex[1].length;
    hex[1] = parseInt(hex[1], 16);
    hex[1] *= Math.pow(16, -len);
    return parseInt(hex[0], 16) + hex[1];
  }
  return parseInt(hex, 16);
};

// @note - should this be part of number or array? it's not really manipulating an array
// but it doesnt manipulate numbers either
export const generateSequence = function(length, reverse = false) {
  let array = [];
  // START AT 1
  for (let i = 1; i <= length; i++) {
    if (reverse) {
      array.unshift(i);
      continue;
    }
    array.push(i);
  }
  return array;
}