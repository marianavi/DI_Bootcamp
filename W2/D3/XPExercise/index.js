// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["yellow","red", "blue", "purple", "green",,"yellow","red", "blue", "purple", "green",
"yellow","red", "blue", "purple", "green"]
let suffixes = ["st", "nd", "rd", "th"]
let sentence;
for (let i = 0; i < colors.length; i++){
	 if (i < 3){
	sentence = `My ${i+1} ${suffixes[i]} color is ${colors[i]}`;
		console.log(sentence)
 	} else if (i >= 3){
 		sentence = `My ${i+1} ${suffixes[3]} color is ${colors[i]}`;
 		console.log(sentence)
 	}
}


// Exercise 2 : List Of People
// Instructions
// ✔ Write code to remove “Greg” from the people array. 
// ✔ Write code to replace “James” to “Jason”.
// ✔ Write code to add your name to the end of the people array.
// ✔Using a loop, iterate through the people array and console.log each person.
// ✔Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// ✔Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// ✖Write code that console.logs Mary’s index. take a look at indexOf on google.
// ✔BECAUSE FOO DOESNT EXIST IN THE ARRAY- - -> Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// ✔Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let people = ["Greg", "Mary", "Devon", "James"]
let newPeople = people.shift();
people.splice(2, 1, "Jason");
people.push("Mariana");
console.log(people)
    for (let i=0; i<people.length; i++) {
	}
	for (let i=0; i<people.length; i++) {
		if (i===3){
			break;
	}
	console.log(people[i]);
}
let peopleCopy = people.slice(1,3)
console.log(peopleCopy)
let peopleFoo = people.indexOf ("Foo");
console.log(peopleFoo);
let last = people[3];
console.log(last)


// Exercise 3 : Repeat The Question
// Instructions
// Promt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let number= prompt("Write a number");
while (number <10) {
    console.log("Will stop only when we will reach to 10")
    number = prompt("Keep writing a number")
}

// Exercise 4 : Attendance
// Instructions
// Given the object above where the key is the students name and the value is the country they are from.
// ✔1. Prompt the student for their name :
// ✔* If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// * Hint: Look up the statement if ... in
// ✔* If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
  
};

let question = prompt("What is your name? Use only lowcases");
	if (question in guestList) {
	console.log(`I am ${question} and I am from `)
}
else {
	console.log("Hi! I’m a guest");
}


// Exercise 5 : Family
// Instructions
// ✔Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

let family = {
  mom: "Rocio",
  dad: "Alex",
  sister: "Ale",
  husband: "Amit",
  dog: "Chuchi"
};


// Exercise 6
// Instructions
// ✔Given the object above, console.log “my name is Rudolf the raindeer”

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
let n1 = details["my"]
let n2 = details["is"] 
let n3 = details["the"] 
console.log(`My ${n1} is ${n2} the ${n3}`)



// Exercise 7 : Secret Group
// Instructions
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let nameString = names.toString()
console.log(nameString)
// console.log(nameString.length)
let l1 = nameString.substring(0,1)
let l2 = nameString.substring(5,6)
let l3 = nameString.substring(12,13)
let l4 = nameString.substring(18,19)
let l5 = nameString.substring(25,26)
let l6 = nameString.substring(33,34)
console.log (`${l1}${l2}${l3}${l4}${l5}${l6}`)

