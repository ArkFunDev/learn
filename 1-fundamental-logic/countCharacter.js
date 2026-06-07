const readline = require('readline-sync');

const inputText = readline.question('Enter a text: ');

//text.length : calculate result of character in string
function countCharacters(text) {
    return text.length;
}

//display the result
console.log(`Total characters: ${countCharacters(inputText)}`);