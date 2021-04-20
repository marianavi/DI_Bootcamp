// WITHOUT LOOPS : we want to say "hello" 5 times

console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")


//LOOPS: FOR LOOP

for (startingpoint; condition ('needs to be true'); 
// how do I make the loop run ) {
}

/*counter++ the same as counter = counter + 1*/

for (let counter = 1; counter <= 5; counter++){
	console.log("hello")
}

//Simple for loop
let colors = [];

for (let counter = 1; counter <= 4; counter++){
	colors.push("yellow")
}

console.log(`the array colors is ${colors}`)

//other example
let userAge = prompt("How old are you");
let cars = []

for (let counter=1; counter <= 10; counter++){
	if (userAge == 18){
		cars.push("Mazda")
	} else {
		console.log("You are not old enough")
	}
}

console.log(cars)


// loop and array


// go through the array
// console.log() each element of the array

let colors=["blue","yellow","red", "pink", "green"]

for (let i = 0; i < colors.length ; i++) {
	console.log(colors[i])
}

// 1st loop : console.log(colors[0]) --> "blue"
// 2nd loop : console.log(colors[1]) --> "yellow"
// 3rd loop : console.log(colors[2]) --> "red"


//other example
let colors=["blue","yellow","red", "pink", "green"]

for (let i = 0; i < colors.length ; i++) {
	colors[i] = colors[i] + "!"
}

// for of with arrays
for (let col of colors){
	console.log(col)
}

console.log(colors)


//for in with objects

let icecream = {
	name:"golda",
	adress:"tlv"
}

for (let ob in icecream){
	console.log(icecream[ob])
}


//while loops

let userName = prompt("What is your name?")

while (userName == "David") {
	console.log("In the while loop")
	userName = prompt("What is your name?")
}

// break keyword
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
      break;
   }
  console.log("The number is " + i);
}

//continue keyword
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
      continue;
   }
  console.log("The number is " + i);
}


//PROCESS BEHIND THE SCENES

// 1st step : the starting point ---> counter = 1 
// 2nd step : check the condition --> 1 <= 5  --> TRUE
// 3rd step : console.log("hello")
// 4th step : incrementing the counter by 1 --> counter = 2

// -------------------------------------------------------

// 1st step : the starting point ---> counter = 2 
// 2nd step : check the condition --> 2 <= 5  --> TRUE
// 3rd step : console.log("hello")
// 4th step : incrementing the counter by 1 --> counter = 3

// -------------------------------------------------------

// 1st step : the starting point ---> counter = 3 
// 2nd step : check the condition --> 3 <= 5  --> TRUE
// 3rd step : console.log("hello")
// 4th step : incrementing the counter by 1 --> counter = 4

// -------------------------------------------------------

// 1st step : the starting point ---> counter = 4
// 2nd step : check the condition --> 4 <= 5  --> TRUE
// 3rd step : console.log("hello")
// 4th step : incrementing the counter by 1 --> counter = 5

// -------------------------------------------------------

// 1st step : the starting point ---> counter = 5
// 2nd step : check the condition --> 5 <= 5  --> TRUE
// 3rd step : console.log("hello")
// 4th step : incrementing the counter by 1 --> counter = 6

// -------------------------------------------------------

// 1st step : the starting point ---> counter = 6
// 2nd step : check the condition --> 6 <= 5  --> FALSE
// --> THE LOOP STOPS
