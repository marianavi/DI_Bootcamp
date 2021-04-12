// EXERCISE 1 : Favorite Color
// Instructions
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let me = ["my", "favorite", "color", "is", "blue"]
console.log (me.join(" "));

// EXERCISE 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix" let str2 = "pod"
// Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// Finally console.log the new concatenated string.

// SOLUCION #1

let str1 = "mix";
let str2 = 'pod';
let str3 = str1.slice (0,2);
console.log(str3);

let str4 = str2.slice (0,2);
console.log(str4);

let str5 = str1.slice (2,3);

let str6 = str2.slice (2,3);

// SOLUCION #2

let st1 = "mix";
let st2 = 'pod';
let st3 = st1.replace("x", "d")
let st4 = st2.replace("d", "x")
console.log(st3)
console.log(st4)

// SOLUCION #3





// EXERCISE 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!