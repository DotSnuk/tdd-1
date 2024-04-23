import { capLetter, reverseString, calculator } from './index';

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

it('Calculate', () => {
  const input = [
    { action: 'add', values: [2, 2], expect: 4 },
    { action: 'sub', values: [2, 2], expect: 0 },
    { action: 'div', values: [4, 2], expect: 2 },
    { action: 'mul', values: [5, 2], expect: 10 },
  ];
  input.forEach(inp => {
    expect(calculator[inp.action](inp.values[0], inp.values[1])).toBe(
      inp.expect,
    );
  });
});
