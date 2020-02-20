export function get(key) {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
}

export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function merge(key, value, duplicates = false) {
  let original = fr.storage.get(key);
  let merged;
  if (!original) {
    merged = value;
  } else if (original instanceof Array) {
    merged = original;
    if (duplicates) {
      merged = merged.concat(value);
    } else {
      merged = [...new Set([...merged, ...value])];
    }
  } else if (original instanceof Array == false) {
    merged = Object.assign(original, value);
  }
  fr.storage.set(key, merged);
}
