export function add(input: string) {
    if (input.trim() === '') return 0; // Return 0 for empty input

        // Replace newline characters with commas
        const removeNewlineChar = input.replace(/[\r\n]+/g, ',');
        console.log(':',removeNewlineChar);
      // Split the input into individual numbers by comma
        const numbers = removeNewlineChar.split(',');

        let negatives: number[] = []; // To collect negative numbers
        
        //included parsing and sumation in same function.
      const sum = numbers.reduce((acc, num) => {
        const parsedNumber = parseFloat(num); 
        if (isNaN(parsedNumber)) {
            throw new Error('Invalid number format');
        }

        if (parsedNumber < 0) {
            negatives.push(parsedNumber); // Collect negative numbers
        }
        return acc + parsedNumber;
    }, 0);
    if (negatives.length > 0) {
        return (`Negatives not allowed: ${negatives.join(', ')}`);
    }
    
return sum;
}

console.log(add('10\n20,-30'));