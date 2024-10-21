import { add } from './addNumber';

describe('add function existence tests', () => {

  test('should check if the add function exists', () => {
    // Check if the function is defined and is of type 'function'
    expect(typeof add).toBe('function');
  });

  //Since we are using typescript we dont have to check if the input is String values by default typescript will throw error in IDE.

  //for Empty string the response should be 0
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

// the string input value will return single value as nothing is to be added.
test('should return the number itself when input is a single number', () => {
  expect(add('5')).toBe(5);
  expect(add('5.a0')).toBe(5);
  expect(add('5 ')).toBe(5);
  expect(() => add('invalid')).toThrow('Invalid number format');
});

	  //to add the comma seperated input numbers.
    test('should return the sum of comma separated numbers', () => {
      expect(add('10,22,30')).toBe(62);
      expect(add(' 1 , 2 , 3 ')).toBe(6); // Handles white spaces in a string  
      expect(add('0.5,0.25,0.25')).toBe(1);   // Test case 3: Handle decimal numbers
      expect(() => add('qm,1,3,2')).toThrow('Invalid number format');


  });

  test('should return the sum of numbers with mixed comma and newline separators', () => {
    expect(add('1,2\n3')).toBe(6);
    expect(add('10\n20,30')).toBe(60);
    expect(add('10.4\n20,30')).toBe(60.4); //with decimals

});

test('should throw an error for multiple negative numbers', () => {
  expect(() => add('-1,-2,-3')).toThrow('Negatives not allowed: -1, -2, -3');
});

});
