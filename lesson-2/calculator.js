// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perfom the operation on the two numbers
// Print the result to the terminal
const readline = require("readline-sync");

console.log("Welcome to Calculator");

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log(
  "What operation would you like to perform? \n1) Addition 2) Subtraction 3) Multiplication 4) Division"
);
let operationOption = readline.question();
let output;

function performArithmetic(strOption) {
  switch (strOption) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
    default:
      console.log("Invalid option. Please enter a valid option");
      strOption = readline.question();
      output = `The result is: ${performArithmetic(strOption)}`;
      break;
  }
}

performArithmetic(operationOption);

console.log(`The result is: ${output}`);