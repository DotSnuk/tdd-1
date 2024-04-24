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

function getShiftedLetter(letter, shift) {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const index = alphabetArray.indexOf(letter.toLowerCase());
  return alphabetArray[index + shift];
}

export function cipher(string, shift) {
  const stringArray = string.split('');
  const cipheredArray = [];
  stringArray.forEach(letter => {
    cipheredArray.push(getShiftedLetter(letter, shift).toUpperCase());
  });
  return cipheredArray.join('');
}

function getAverage(arr) {
  let total = 0;
  arr.forEach(value => {
    total += value;
  });
  return total / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getLength(arr) {
  return arr.length;
}

export function analyzeArray(arr) {
  const average = getAverage(arr);
  const min = getMin(arr);
  const max = getMax(arr);
  const length = getLength(arr);
  return { average, min, max, length };
}
