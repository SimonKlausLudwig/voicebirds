const Cookies = require('js-cookie');
const cookies = require('./defaultCookies.json');

export const setCookie = (cookie: string, value: any) => {
  if (typeof window === "undefined") {
    return;
  }
  console.log(`Set Cookie ${cookie} to ${value}`);
  Cookies.set(cookie, value, {path: '/', domain: '.' + window.location.hostname, overwrite: true});
}

export function acceptedTracking() {
  return Cookies.get(cookies.ACCEPTED_TRACKING.cookie) === "true";
}

export const acceptAll = (exclude?: string) => {
  Object.keys(cookies).filter(key => cookies[key].cookie !== exclude).forEach(key =>
    setCookie(cookies[key].cookie, true)
  )
}
