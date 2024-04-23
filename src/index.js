export function capLetter(letter) {
  return letter.charAt(0).toUpperCase();
}

export function reverseString(string) {
  const stringArray = string.split('');
  return stringArray.reverse().join('');
}

export const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
  mul: (a, b) => a * b,
};
