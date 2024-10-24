import { add } from './addNumber';

describe('add function existence tests and Empty string', () => {

  test('should check if the add function exists', () => {
    // Check if the function is defined and is of type 'function'
    expect(typeof add).toBe('function');
  });

  //Since we are using typescript we dont have to check if the input is String values by default typescript will throw error in IDE.

  //for Empty string the response should be 0
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});
describe('add function additon logic for different inputs.', () => {

  // the string input value will return single value as nothing is to be added.
  test('should return the number itself when input is a single number', () => {
    expect(add('5')).toBe(5);
    expect(add('5.a0')).toBe(5);
    expect(add('5 ')).toBe(5);
    expect(add('invalid')).toBe('Invalid number format');
  });

  //to add the comma seperated input numbers.
  test('should return the sum of comma separated numbers', () => {
    expect(add('10,22,30')).toBe(62);
    expect(add(' 1 , 2 , 3 ')).toBe(6); // Handles white spaces in a string  
    expect(add('0.5,0.25,0.25')).toBe(1);   // Test case 3: Handle decimal numbers
    expect(add('qm,1,3,2')).toBe('Invalid number format');


  });

  test('should return the sum of numbers with mixed comma and newline separators', () => {
    expect(add('1,2\n3')).toBe(6);
    expect(add('10\n20,30')).toBe(60);
    expect(add('10.4\n20,30')).toBe(60.4); //with decimals

  });

  test('should throw an error Message for negative numbers', () => {
    expect(add('10\n20,-30')).toBe('Negatives not allowed: -30'); //with decimal negative values
  });

  test('should throw an error Message for multiple negative numbers', () => {
    expect(add('-1,-2,-3')).toBe('Negatives not allowed: -1, -2, -3');
  });

});

describe('add CustomDelimited String', () => {
  test('should sum numbers with a custom delimiter', () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//,\n4,5,6")).toBe(15);
    expect(add("//|\n1|2|3|4")).toBe(10);
  });

  test('should handle numbers separated by the default delimiter (comma)', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5")).toBe(9);
  });

  test('should handle empty input', () => {
    expect(add("//;\n")).toBe(0);
    expect(add("")).toBe(0);
  });

  test('should ignore invalid numbers', () => {
    expect(add("//;\n1;two;3")).toBe('Invalid number format'); // 1 + 3
    expect(add('invalid')).toBe('Invalid number format');
  });

  test('should handle whitespace around numbers', () => {
    expect(add("//;\n 1 ; 2 ; 3 ")).toBe(6); // 1 + 2 + 3
    expect(add("//,\n  4 ,  5 ,  6  ")).toBe(15); // 4 + 5 + 6
  });
});