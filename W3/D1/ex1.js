// Exercise #1
// Create a stuctured html file linked to a JS file
        
//1. Create these variables and give them values:
//         addressNumber
//         addressStreet
//         country
// 2. Write a variable named global_address, and concatenate inside, the variables:
        
//         addressNumber
//         addressStreet
//         country
//         In order to to create a sentence
//         3. Display global_address Example: global_address should display « I live in BenYehuda 5, in Israel »

let addressNumber = 32
// console.log(addressNumber);
let addressStreet = "Masarik"
// console.log(addressStreet);
let country = "Israel"
// console.log(country);
let global_address = `i live in ${addressStreet} ${addressNumber} in ${country}`
console.log(global_address);


// EXCERSICE #2
// 1. Store your birth year in a variable.
// 2. Store a future year in a variable.
// 3. Calculate your possible ages for that year based on the stored values.
// 4. Display : "I will be NN in YYYY", substituting the values.

let birthYear = 1989
let nextYear = 2022
let nextYearAge = nextYear-birthYear
console.log(`I will be ${nextYearAge} 😢`);


// EXERCISE #3
// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
// 2. Display dog
// 3. Add to the array pets, the pet horse. Remove the pet rabbit
// 4. Display the array length

let pets= ['cat','dog','fish','rabbit','cow']
console.log(pets[1]);
pets.splice(3, 1, 'horse')
console.log(pets);
console.log(pets.length)