// Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and 
// output the result to the console:

let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof val1);
console.log(typeof val2);
console.log(typeof myNum);

// Practice exercise 2.2
// Create a variable for your name, another one for your age, and another one for 
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are 
// variables: 

let name = "Alina";
let age = 20;
let code = true;

console.log(`Hello, My name is ${name}, I am ${age} years old and I can code JavaScript: ${code}. `);


// Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
// theorem when given the values of the other two sides. The theorem specifies that the 
// relation between the sides of a right-angled triangle is a2 + b2 = c2.
// You can use prompt() to get the value for a and b. Write code to get the value from 
// the user for a and b. Then square the values of both a and b before adding them 
// together and finding the square root. Print your answer to the console.

let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");

const SquareOfA = a ** 2;
const SquareOfB = b ** 2;

const c = SquareOfA + SquareOfB;

const SquareRoot = Math.sqrt(c);

console.log(`The hypotenuse of a triangle is: ${ SquareRoot} `);

// Practice exercise 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the 
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console

let A = 4;
let B = 43;
let C = 24;

// Add B to A 
let addition = A += B;

// Divide A by C
let divide = A /= C;

// Replace the value of c with the modulus of c and b
let modulus = C %= B;

console.log(addition);
console.log(divide);
console.log(modulus);

// Chapter Project 

// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format: 

let valueInMiles = 3 ;
let ValueInKilometers = valueInMiles *  1.60934 ;

console.log(`The distance of ${ValueInKilometers} kms is equal to ${valueInMiles} mile `);

// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console

const height = 10;
const weight = 15;

const heightIncm = height * 2.54 ;
const weightInkilos = weight * 0.453592 ;

console.log(`Height: ${height} inches = ${heightIncm} centimeters `);
console.log(`Weight: ${weight} pounds = ${weightInkilos} kilos`);

const heightInMeters = heightIncm / 100;
const BMI = weightInkilos / (heightInMeters * heightInMeters);

console.log(`BMI = ${BMI}`);
