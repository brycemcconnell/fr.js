export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const debounce = function(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this,
      args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const throttle = (func, timing = 1000) => {
  let throttled;
  return (...args) => {
    if (!throttled) {
      func(...args);
      throttled = setTimeout(() => throttled = false, timing)
    }
  }
}
