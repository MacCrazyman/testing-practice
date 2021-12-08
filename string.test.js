const task = require('./string');
const calculator = require('./calculator');
const operation = new calculator.calculator();

describe('String function test', () => {
  test ('"Microverse" contains 10 characters', () => {
    expect(task.stringLength('Microverse')).toBe(10);
  });

  test ('"" is an empty string wich returns error', () => {
    expect(task.stringLength('')).toBe('error');
  });

  test ('"Hello world" is longer than 10 characters wich returns error', () => {
    expect(task.stringLength('Hello world')).toBe('error');
  });

  test ('"hello" would be returned as "olleh"', () => {
    expect(task.reverseString('hello')).toBe('olleh');
  }); 
})

describe.each([
  [
    [
      [1,1,2],
      [1,5,6],
      [8,5,13],
    ],
    [
      [1,1,0],
      [3,5,-2],
      [8,-5,13],
    ],
    [
      [1,1,1],
      [3,5,15],
      [8,-5,-40],
    ],
    [
      [1,1,1],
      [15,5,3],
      [77,7,11],
    ],
  ],
])('calculator testing', (arr1,arr2,arr3,arr4) => {
  describe.each(arr1)('addition test', (a,b,c) => {
    test(`"${a}+${b}" should be equal to "${c}"`, () => {
      expect(operation.add(a,b)).toBe(c);
    });
  });

  describe.each(arr2)('substraction test', (a,b,c) => {
    test(`"${a}-${b}" should be equal to "${c}"`, () => {
      expect(operation.substract(a,b)).toBe(c);
    });
  });

  describe.each(arr3)('multiply test', (a,b,c) => {
    test(`"${a}*${b}" should be equal to "${c}"`, () => {
      expect(operation.multiply(a,b)).toBe(c);
    });
  });

  describe.each(arr4)('division test', (a,b,c) => {
    test(`"${a}/${b}" should be equal to "${c}"`, () => {
      expect(operation.divide(a,b)).toBe(c);
    });
  });
})