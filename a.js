// const isAdult = true;
// const hasTicket = false;

// const canEnter = isAdult && hasTicket;

// console.log(canEnter);

// const age = 3;

// if (age >= 18){
//     console.log('SUdah Dewasa')
// }

//1
// const rectangle = {

//     width: 1,
//     height: 2,
//     calculateArea: function () {
//         return this.width * this.height;
//     },

// };

// const area = rectangle.calculateArea();
// console.log(area);

//2
// const readline = require('readline-sync');

// const width = +readline.question('Enter width: ');
// const height = +readline.question('Enter height: ');

// const rectangle = {
//     width,
//     height,
//     calculateArea: function () {
//         return this.width * this.height;
//     },
// };
// const area = rectangle.calculateArea();
// console.log(area);

// function expression
// regular dan arrow

// declaration
function greeting() {
    console.log('Helo, my name is Helmy');
};

// expression, regular
const greeting = function() {
    console.log('Helo, my name is Helmy');
};

// expression, arrow
const greeting = () => {
    console.log('Helo, my name is Helmy');
};