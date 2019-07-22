export const recursiveFindNode = (data, key, value, {
  childKey = 'children'
} = {}) => {
  for(var i = 0; i < data.length; i++) {
    if (data[i][key] == value) {
      return data[i];
    } else {
      let childrenResult = recursiveFindNode(data[i][childKey], key, value);
      if (childrenResult != undefined) {
        return childrenResult;
      }
    }
  }
  return null;
}