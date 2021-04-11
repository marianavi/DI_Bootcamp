// Variables
// // var nameOfVariable
// // let nameOfVariable
// // const nameOfVariable


let usersName = "Jonathan";
usersName = "Sarah";
console.log(usersName)


let welcome = "Welcome to all my students"
console.log(welcome)
let today = "today we are learning javascript"

// CONCATENATING
console.log(welcome +  " " + today)
// NOT THE SAME AS
console.log("welcome" + "today")

//CONCATENATING
let icecream = "Golda";
let flavour = "Vanilla"

let sentence = "I love going to " + icecream + " my favorite flavour is " + flavour;
let anotherSentence = `I love going to ${icecream} my favorite flavour is ${flavour}`;


// typeof method
console.log(typeof(welcome))

//STRING PROPERTIES AND METHODS
console.log(usersName.length)

let email = "john@gmail.com"
console.log(email.includes("@"))

console.log(usersName.substring(2,5))


// DECLARING AND DEFINING VARIABLES
// DEFINING A VARIABLE : taxes
// ASSIGNING A VALUE TO MY VARIABLE : 17%
let taxes = "17%";

// REASSIGNING A VALUE TO MY VARIABLE: 20%
taxes = "20%"
console.log(taxes)



// NUMBERS

let usersAge = 45;
console.log(typeof(usersAge));

let grade = 78.3425;
console.log(grade.toFixed(2))

let gradeMultiplied = grade * 2;
let gradeMultipliedAgain = gradeMultiplied * 5
let decimal = 2.6

console.log(gradeMultiplied);

// DEFINED AND UNDEFINED
// DEFINED
let flavour = "chocolate"

// UNDEFINED
let icecream;

console.log(icecream)
console.log(flavour)


//REVIEW ON WHAT WE HAVE DONE SO FAR

//STRING, NUMBERS, BOOLEAN -> PRIMITIVES DATA TYPES
//let color = "blue";  --> DECLARING A VARIABLE (color) AND DEFINING THE VARIABLE ("blue")
//let flavour;  --> DECLARING A VARIABLE (flavour)
//flavour = "vanilla" --> DEFINING THE VARIABLE ("vanilla")
//CONCATENATE : + , `${}`
//METHODS AND PROPERTIES OF NUMBER AND STRING


//ARRAY : list of items

let listOfUsers = ["John","Sarah", "Leo", "Leana", "Daniela"]
let lengthOfUsers = listOfUsers.length
console.log(`There are ${lengthOfUsers} users in my newsletter`) 

// //ACCESS ITEMS IN AN ARRAY : WE NEED TO GET THE POSITION OF THE ITEM
// // let nameOfVariable =  nameOfArray[position of the item]
let thirdUser = listOfUsers[2]
console.log(`The third user is ${thirdUser}`)


// // CHANGE THE VALUE OF AN ITEM IN AN ARRAY
// // 1. ACCESS THE ITEM
// // 2. CHANGE THE VALUE

listOfUsers[2] = "Shimon"
console.log(listOfUsers)


// let stuff = ["John", 12, "blue", true, "Sarah", ["blue", "red", "yellow"]] // OK

//CONSOLE.LOG THE COLOR "RED"
// THE NESTED ARRAY IS AT POSITION 5
// INSIDE THE COLORS ARRAY, the color red is at position one
stuff[5][1]


// ARRAY METHODS

listOfUsers.push("Jonathan")
console.log(listOfUsers)


listOfUsers.pop()
console.log(listOfUsers)


// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter defines how many elements should be removed.
// The rest of the parameters define the new elements to be added.
// The splice() method returns an array with the deleted items:

listOfUsers.splice(2,1, "blue","red","green")
console.log(listOfUsers)


let listOfUsers = ["John","Sarah", "Leo", "Leana", "Daniela"]
let joinedUsers = listOfUsers.join(":)")
console.log(joinedUsers)

let usersHobbies = "Tennis, Football, Painting";
let userHobbiesArray = usersHobbies.split(", ")
console.log(userHobbiesArray)
console.log(userHobbiesArray[1])

// DIFFERENCE BETWEEN PROPERTIES AND METHODS
let colors = ["blue", "yellow", "red"]

// //PROPERTY
// colors.length

// // METHOD
// colors.pop()
// colors.push("green")

// USER INTERFACE FUNCTIONS
console.log("hello")
alert("Hello")
let chocolate = confirm("Do you like chocolate")
console.log(chocolate)
let answerUser = prompt("How old are you ?")
console.log(answerUser)
