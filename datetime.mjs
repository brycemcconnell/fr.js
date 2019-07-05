export function getDate(datetime) {
  datetime = new Date(datetime);
  return `${datetime.getFullYear()}-${(datetime.getMonth().toString().padStart(2, '0'))}-${(datetime.getDate().toString().padStart(2, '0'))}`;
}
export function getLongDate(datetime) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${datetime.getDate()} ${months[datetime.getMonth()]}, ${datetime.getFullYear()}`;
}
/**
 * 
 * @param {*} datetime 
 * @returns  // hh:mm
 */
export function getTime(datetime) {
  datetime = new Date(datetime);
  return datetime;
}

export function utc(datetime) {
  datetime = new Date(datetime);
  let DD = datetime.getDate();
  let MM = datetime.getMonth();
  let YYYY = datetime.getFullYear();
  let hh = datetime.getHours();
  let mm = datetime.getMinutes();
  let ss = datetime.getSeconds();
  return [YYYY, MM, DD, hh, mm, ss];
}

export function diffNow(datetime) {
  datetime = utc(datetime);
  datetime = Date.UTC(...datetime);
  const now = new Date(Date.now());
  const diff = Math.round((now - datetime) / 1000);
  let minute = 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7;

  if (diff > week) {
    return `${Math.floor(diff/week)} weeks ago`;
  }

  if (diff > day) {
    return `${Math.floor(diff/day)} days ago`;
  }

  if (diff > hour) {
    return `${Math.floor(diff/hour)} hours ago`;
  }

  if (diff > minute) {
    return `${Math.floor(diff/minute)} minutes ago`;
  }

  return `${diff} seconds ago`;
};