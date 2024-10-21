export function add(input: string) {
    if (input === '') return 0; // Return 0 for empty input

      // Split the input into individual numbers by comma
        const numbers = input.split(',');
        
        //included parsing and sumation in same function.
      const sum = numbers.reduce((acc, num) => {
        const parsedNumber = parseFloat(num); 
        // console.log("parsedNumber:",parsedNumber);
        if (isNaN(parsedNumber)) {
            throw new Error('Invalid number format');
        }
        return acc + parsedNumber;
    }, 0);
    
    

return sum;
}

console.log(add('0.5,0.25,0.25'));