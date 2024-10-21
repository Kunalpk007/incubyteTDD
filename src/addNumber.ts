export function add(input: string) {
    if (input === '') return 0; // Return 0 for empty input

        // Replace newline characters with commas
        const removeNewlineChar = input.replace(/[\r\n]+/g, ',');
      // Split the input into individual numbers by comma
        const numbers = removeNewlineChar.split(',');
        
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