const readline = require('readline-sync');

// Input number from user
const enterNumber = +readline.question('Enter a number: ');

// Function to view multiplication table
function multiplicationTable(num) {

    console.log(`\nMultiplication Table of ${num}\n`);

    const MULTIPLICATION_NUM = 10;

    // loop 1 to 10
    for (let i = 1; i <= MULTIPLICATION_NUM; i++) {
    
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// call function
multiplicationTable(enterNumber);