//
console.log("Exercise 1 : Information")
//PART I✅

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe(){
console.log ("My name is ");
}
infoAboutMe();

console.log("PART II")

// Part II ✅

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with those arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson (personName, personAge, personFavoriteColor){
    console.log(`Your name is ${personName}, you are ${personAge}, your favorite color is ${personFavoriteColor}`)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

console.log("PART III")

// Part III

// ✅Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// ✅console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// Call the function twice with those arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

function infoAboutPerson (personName, personAge, personFavoriteColor, _personHobbies){
console.log(`Your name is ${personName}, you are ${personAge}, your favorite color is ${personFavoriteColor}`)
}

let newHobbies = infoAboutPerson[3];
console.log(newHobbies)
for (let i = 1; i <4; i++){
console.log(`The hobbies are ${newHobbies}`)
}

infoAboutPerson("David", 45, "blue", ["tennis", "painting"]);
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);

console.log (" ")
console.log("Exercise 2 : Keyless Car")
// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

let ageUser = console.log("What is your age?");
function checkDriverAge(){
  if (ageUser < 18){
console.log ("Sorry, you are too young to drive this car. Powering off");
} else if (ageUser== 18) {
console.log("Congratulations on your first year of driving. Enjoy the ride!");
} else {
console.log ("You are old enough to drive. Powering On. Enjoy the ride!");
}            
}
checkDriverAge()

let ageUser2 = confirm("Press OK if you are older than 18 years old")

console.log (" ")
console.log("Exercise 3 : ODD or EVEN")
// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function
function checkNumber(){
    for (let i = 0; i <= 100; i+=5) { 
    if (i % 2 == 0){
        console.log(`${i} is an even number`);
        }else{
        console.log(`${i} is an odd number`);
        }
    }
}
checkNumber();

console.log (" ")
console.log("Exercise 4: Find The Numbers Divisible By 23")
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function isDivisible(){
    for (let i = 0; i<=500; i++){
        if (i % 23 == 0){
        console.log(`${i} is divisible by 23`)
    // }else if (i % 3 == 0){
    //     console.log(`${i} is divisible by 3`)
    // }else (i %45 == 0)
    // console.log(`${i} is divisible by 45`)
        }
    }
}
isDivisible();

console.log (" ")
console.log("Exercise 5 : Amazon Shopping")
// Instructions"
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
function checkBasket() {
    prompt ('Search an item')
    
}

checkBasket();