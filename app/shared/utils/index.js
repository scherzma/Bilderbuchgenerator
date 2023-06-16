function validateUsername(username) {
  return !/\s/.test(username);
}
function validatePassword(password) {
  return /[A-Z]/.test(password)
  && /[a-z]/.test(password)
  && /[0-9]/.test(password)
  && /[^A-Za-z0-9]/.test(password)
  && password.length > 8;
}
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
function isUndefinedOrNull(check) {
  return check === null || check === undefined;
}
function throwUnimplementedError() {
  throw new Error('not implemented yet');
}
export {
  validateUsername, validateEmail, validatePassword, isUndefinedOrNull, throwUnimplementedError,
};
