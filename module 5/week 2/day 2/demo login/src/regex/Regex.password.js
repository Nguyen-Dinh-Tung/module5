function password(value) {
  let regex = /[\w \W]{6}$/;
  return regex.test(value);
}
export default password;
