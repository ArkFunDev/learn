const readline = require('readline-sync');

const enterText = readline.question('Enter a word: ');

// str is function parameter
function reverseString(str) {

    // make null variable for saving of string result reverse
    let reversed = '';

    //looping from back to front
    //str.length use for calculate result of character
    // - 1 because index start from 0 or start from the last letter
    // i >= 0 is The loop continues as long as the index is 0 or greater
    // i-- is decrease by 1 each loop
    for (let i = str.length - 1; i >= 0; i--) {

        //take character then add to 'reversed'
        reversed = reversed + str[i];
    }

    // Returns the reversed result of the string
    return  reversed;

}

// display the result into terminal
console.log('Reversed String: ' + reverseString(enterText));