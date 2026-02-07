// assets/js/turnstile.js

let turnstileToken = null;

window.onTurnstileSuccess = function (token) {
  turnstileToken = token;
};

export function getTurnstileToken() {
  return turnstileToken;
}
