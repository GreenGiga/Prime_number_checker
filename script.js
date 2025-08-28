console.log("fire");

let userInput = prompt("Check if the whole number is a prime number:");

let two = userInput % 2;
let three = userInput % 3;
let five = userInput % 5;
let seven = userInput % 7;

if(userInput == 2 || userInput == 3 || userInput == 5 || userInput == 7) {
    alert(`${userInput} is a prime number`)
} else if(two == 0 || three == 0 || five == 0 || seven == 0 || userInput == 1) {
    alert(`${userInput} is not a prime number`)
} else {
    alert(`${userInput} is a prime number`)
};