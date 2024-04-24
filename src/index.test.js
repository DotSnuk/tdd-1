import {
  capLetter,
  reverseString,
  calculator,
  cipher,
  analyzeArray,
} from './index';

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

it('Ceaser cipher', () => {
  const input = [
    { string: 'hampus', shift: 2, expect: 'JCORWU' },
    { string: 'hampus', shift: 4, expect: 'LEQTYW' },
    { string: 'a', shift: 1, expect: 'B' },
  ];
  input.forEach(inp => {
    expect(cipher(inp.string, inp.shift)).toBe(inp.expect);
  });
});

it('Analyze array', () => {
  const input = [
    {
      arr: [1, 2, 3],
      expect: {
        min: 1,
      },
    },
    { arr: [1, 2, 3, 4, 5, 6], expect: { length: 6 } },
    {
      arr: [55, 105, 33, 2],
      expect: {
        max: 105,
        length: 4,
      },
    },
  ];
  input.forEach(inp => {
    expect(analyzeArray(inp.arr)).toMatchObject(inp.expect);
  });
});
