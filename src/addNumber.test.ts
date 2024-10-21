import { add } from './addNumber';

describe('add function existence tests', () => {

  test('should check if the add function exists', () => {
    // Check if the function is defined and is of type 'function'
    expect(typeof add).toBe('function');
  });

});
