
export const get = function(obj, path) {
  const pathArray = path.constructor === Array ? path : path.split('.');
  if (!pathArray.length) {
    return obj;
  }
  return obj ? get(obj[pathArray.shift()], pathArray) : null;
};

export function toArray(obj) {
  const array = Object.entries(obj).map(pair => {
    return pair[0] = pair[1];
  })
  return array;
}