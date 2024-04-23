import { capLetter, reverseString } from './index';

it('Capitalize letters', () => {
  const input = [
    { string: 'a', expect: 'A' },
    { string: 'hello world', expect: 'H' },
    { string: '11a', expect: '1' },
  ];
  input.forEach(inp => {
    expect(capLetter(inp.string)).toBe(inp.expect);
  });
});

it('Reverse string', () => {
  const input = [
    { string: 'hello', expect: 'olleh' },
    { string: 'sad panda', expect: 'adnap das' },
    { string: 'javascript is coolest!', expect: '!tselooc si tpircsavaj' },
  ];
  input.forEach(inp => {
    expect(reverseString(inp.string)).toBe(inp.expect);
  });
});
