// for (statement 1; statement 2; statement 3) {
// code block to be executed
//   }

// statement 1 : creating the iterator
// statement 2 : set the limit of it
// statement 3 : Incrementation

// iterator ++ ====> iterator + 1 = iterator

for (let iterator = 0; iterator <= 100; iterator+=5) {
    console.log("the current number is " + iterator);
}

// let peoples_name = ['Ben', 'Tali', 'Dasha', 'Dan'];
// console.log(peoples_name.length);

// Adding the property "length" to set the limit being = 4 (length of the array)
// for (let i = 0; i < 100; i++) {
//     console.log(peoples_name[i]);
// }

// for (let i = 0; i <= 15; i++){
//     // % modulo is no like /(divide) it returns the remainder
//     if (i % 2 == 0) { // 0
//     	console.log(i + ' Even Number');
//     }else{
//     	console.log(i + ' Odd Number');
//     }

//     // ternary (advanced solution)
//     // (i%2) ? console.log('even') : console.log('odd');
// }
// if isTeacher = if isTeacher == true
// give me access

// // -------- for in % of --------

// // OBJECTS
// let person = {
// //  key: "value"
//     fname:"John",
//     lname:"Doe",
//     age:25
// };

// // get infos from the objects
// // console.log(person['fname']);
// // console.log(person.lname);

// //  FOR IN
// for (let x in person) {
//   console.log(x) //fname lname age
//   console.log(person[x]) // John Doe 25 // person['fname']
// }

// console.log('++++++++++++++++')

// // ARRAY
// let peoples_name = ['Ben', 'Tali', 'Dasha', 'Dan'];

// // FOR IN
// for (let x in peoples_name) {
//     console.log(x, 'index')
// }

// // FOR OF
// for (let x of peoples_name) {
//   console.log(x) // John Doe 25 - Value
// }

//  WHILE LOOPS
// while (isTeacher == false)  // (!isTeacher)
// {
// //    dont have access to specific
// }

// iterator is n
// statement 1
// let n = 0;
// // statement 2
// while (n <= 3) {
//     console.log(n)

// // statement 3
// //   Increment //
//   n++;
// }

// DO WHILE
// Runs the loop at least one before

// let i = 0;

// do {
//   console.log("The number is " + i)
//   i++;
// }

// while (i <= 10);

// let person = {
// //  key: "value"
//     fname:"John",
//     lname:"Doe",
//     age:25,
//     username,
//     pass
// };

// // Object.keys(obj) - used for objects
// console.log(Object.keys(person));
// // Object.values(obj) - used for objects
// console.log(Object.values(person));

// // break are for the "loops"
// // BREAK
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break;
//       }
//     console.log("The number is " + i); // 0 1 2
//   }
// // returns are used for function

// console.log('----------------------');

// // CONTINUE
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9
//   }

let names = ["john", "sarah", 23, "Rudolf", 34];

// From Dan_emmanuel
// const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

// 1. Write a JavaScript for loop that will go through the variable names.
// for (fname of names) {
//   if (typeof fname != "string") {
//     continue; // 23, 34
//   }
//   // john, sarah, Rudolf
//   let firstLetter = fname[0]; // get the first letter
//   let restOfTheWord = fname.substr(1);
//   // must include true because toUpperCase is a method
//   if (firstLetter.toUpperCase() == true) {
//     console.log(fname);
//   } else {
//     // concatination of 2 strings
//     console.log(firstLetter.toUpperCase() + restOfTheWord);
//   }
// }

// if the item is not a string, pass. // continue
// if the item is a string, check if it's first letter is in uppercase. If not, change it to uppercase and then display the name.

// 2. Write a JavaScript for loop that will go through the variable names.
// for (fname of names) {
//     if (typeof fname == 'string') {
//         console.log(fname);
//     }
// }

// console.log('---------');

// for (index in names) {
//     if (typeof names[index] == 'string') {
//         console.log(names[index]);
//     }
// }

// console.log('---------');

// for (let i = 0; i < names.length; i++) {
//     if (typeof names[i] == 'string') {
//         console.log(names[i]);
//     }
// }


// function sayHello(){
//     // Setting the scope of name to be local !
//     var name = "Sarah"

// }
// console.log(name) // undefined


// // name is at the global scope
// var name = "Sarah"

// function sayHello(){
//     console.log(name); //  "Sarah"
//     name = "Mark";
//     console.log(name); // "Mark"
// }

// sayHello();

// console.log(name) // "Mark"



