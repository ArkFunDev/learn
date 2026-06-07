const readline = require('readline-sync');

function inputNumber() {

  while (true) {
  
    const enteredNumber = +readline.question('Enter Number: ');

    // validasi harus bilangan angka bulat dan harus minimal input dari angka 1
    if (Number.isInteger(enteredNumber) && enteredNumber >= 1) {

      for (let i = 1; i <= enteredNumber; i++) {
  
        console.log(i);
  
      }

      //validasi salah return ke input user
      return;
    }

    //jika validasi salah akan muncul ini
    console.log('Input must be an integer >= 1');
  
  }

}

inputNumber();

//ini tanpa validasi, hanya print angka

// const numb = +readline.question('Enter number: ');

// for (let i = 0; i <= numb; i++ ) {
//   console.log(i);
// }