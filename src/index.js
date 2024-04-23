export function capLetter(letter) {
  return letter.charAt(0).toUpperCase();
}

export function reverseString(string) {
  const stringArray = string.split('');
  return stringArray.reverse().join('');
}
