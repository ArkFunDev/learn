// const readline = require('readline-sync');

// function sumNumbers(numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }

// const listNumbers = [1, 2, 3, 4, 5];
// const result = sumNumbers(listNumbers);

// console.log(result);

//=====

// const readline = require('readline-sync');

// function sumNumbers(numbers) {

//     // menjumlahkan semua array
//     return numbers.reduce((total, number) => total + number, 0);
// }

// // input user dengan banyak number, kalau + hanya input 1 number
// const inputNumber = readline.question(

//     'Enter numbers separated by spaces: '
// );

// // ubah string menjadi array number
// const listNumbers = inputNumber
    
//     //memisahkan number dengan spasi
//     .split(' ')

//     //mengubah string menjadi number
//     .map(Number);

// // jumlahkan
// const result = sumNumbers(listNumbers);

// console.log('Total:', result);

//=====
const readline = require('readline-sync');

const sumOfNumbers = +readline.question('Enter number: ');

// menampilkan totalnya
let result = 0;

// menampilkan penjumlahannya
let resultView = '';

for (let i = 1; i <= sumOfNumbers; i++) {

  result += i;

  resultView += i;

  // menampilkan tanda +
  if (i < sumOfNumbers) {
    
    resultView += ' + ';
  
  }

}

console.log(`${resultView} = ${result}`);