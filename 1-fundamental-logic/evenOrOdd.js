// const readline = require('readline-sync');

// function evenOrOdd() {
//     while (true) {
//         const inputNumber = readline.question('Enter the number: ');

//         // if (!/^-?\d+$/.test(input)) {
//         //     console.log('Input must be a number');
//         //     continue;
//         // }

//         if (Number.isNaN(Number(inputNumber))) {
            
//             console.log('Input must be a number');
            
//             //loop again from start
//             continue;
//         }

//         //change string to 'BigInt' so that big number allow
//         const number = BigInt(inputNumber);

//         //
//         console.log(number % 2n === 0n ? 'Even' : 'Odd');

//         break;
//     }
// }

// evenOrOdd();

const readline = require('readline-sync');

const numb = +readline.question('');

if (numb % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}