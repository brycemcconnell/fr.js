export function params() {
  const urlParams = new URLSearchParams(window.location.search);
  return Object.fromEntries([...urlParams.entries()]);
}

export function query() {
  const urlParams = new URLSearchParams(window.location.search);
  let query = urlParams ? '?' + urlParams.toString() : '';
  return query;
}

export function modify(key, value) {
let searchParams = new URLSearchParams(window.location.search);
  searchParams.set(key, value);
  let newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
  window.history.pushState(null, '', newRelativePathQuery);
}

export function unset(key) {
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(key);
  let newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
  window.history.pushState(null, '', newRelativePathQuery);
}
