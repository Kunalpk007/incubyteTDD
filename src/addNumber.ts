export function add(input: string) {
    if (input === '') return 0; // Return 0 for empty input

      // Split the input into individual numbers by comma
        const numbers = input.split(',');
        
        //included parsing and sumation in same function.
      const sum = numbers.reduce((acc, num) => {
        const parsedNumber = parseInt(num, 10); 
        console.log();
        if (isNaN(parsedNumber)) {
            return 0;
        }
        return acc + parsedNumber;
    }, 0);
    
    

return sum;
}

console.log(add('invalid'));