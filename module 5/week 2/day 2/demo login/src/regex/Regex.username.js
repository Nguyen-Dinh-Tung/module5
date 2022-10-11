function username(value) {
  let regex = /^[a-zA-Z0-9]{6}$/;
  return regex.test(value);
}
export default username;
