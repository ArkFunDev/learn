const readline = require('readline-sync');

const inputNumber = +readline.question('Enter a inputNumber: ');

function numFactorial(num) {
    
    //variabel for saved the result of factorial, start on 1
    let result = 1;

    console.log('\nFactorial Process:\n');

    // loop from 1 to num
    for (let i = 1; i <= num; i++) {
        
        // used to multiply the previous result
        // so use too 'result *= i'
        result = result * i;

        // 'result' newest of result, for get before number
        console.log(`${result / i} * ${i} = ${result}`);
    }

    // restore end result of factorial
    return result;
}

// checking negatif number
if (inputNumber < 0) {

    // display error message if negatif input
    console.log('Factorial is not defined for negative inputNumbers.');

// if valid/non negatid input then factorial program running
} else {
    const finalResult = numFactorial(inputNumber);

    console.log(`\nFinal Result: ${finalResult}`);
}

// Rumus factorial:
// n!=n×(n−1)×(n−2)×⋯×1