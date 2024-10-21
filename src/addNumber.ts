export function add(input: string) {
    if (input.trim() === '') return 0; // Return 0 for empty input

    // Check if the string contains a custom delimiter
    const delimiterPattern = /^\/\/(.+?)\n/;
    const match = input.match(delimiterPattern);

    let delimiter = ','; // Default delimiter
    let numbersString;
    if (match) {
        delimiter = match[1]; // Get the custom delimiter
        numbersString = input.slice(match[0].length); // Get the rest of the string
    } else {
         // Replace newline characters with commas
        // const removeNewlineChar = input.replace(/[\r\n]+/g, ',');
        numbersString = input.replace(/[\r\n]+/g, ','); // No custom delimiter, use entire input
    }
    console.log('::',numbersString,'::',delimiter,'::',match);

        // Replace newline characters with commas
        // const removeNewlineChar = input.replace(/[\r\n]+/g, ',');
        // console.log(':',removeNewlineChar);
      // Split the input into individual numbers by comma
        // const numbers = removeNewlineChar.split(',');
        console.log(':numbersString:',numbersString);
        if (numbersString.trim() === '') return 0;
        //The pipe | is escaped in the regular expression to ensure it is treated as a literal character.
        const escapedDelimiter = delimiter === '|' ? '\\|' : delimiter;
        const numbers = numbersString.split(new RegExp(escapedDelimiter));
        console.log(':Numbers:',numbers);
        let sum = 0;
        let negatives: number[] = []; // To collect negative numbers
        
        for (const num of numbers) {
            const parsedNumber = parseFloat(num.trim());
            if (isNaN(parsedNumber)) {
                return 'Invalid number format';
            }
            if (parsedNumber < 0) {
                negatives.push(parsedNumber);
            }
            sum += parsedNumber;
        }
    
        if (negatives.length > 0) {
            return `Negatives not allowed: ${negatives.join(', ')}`;
        }
    
return sum;
}
// const input = '//;\n1;2;3;4';
//    const input = '//|\n1|2|3|4';
//    const input = '//%\n1%2%3%4';
// const input = '1\n2,3';
const input = 'qm,1,3,2';

console.log(add(input));