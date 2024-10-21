export function add(input: string) {
    if (input === '') return 0; // Return 0 for empty input

      // Split the input into individual numbers by comma
      const numbers = input.split(',');
      let parsedResult =  numbers.map(str => {
        const parsedNumber = parseFloat(str);
        return parsedNumber;
    });

return parsedResult;
}