// Exercise 1
// Create a structured HTML file linked to a JS file
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

//SOLUTION #1
// for (let i =0; i <=30; i++) {
//     if (i % 2 == 0){
//     console.log(`${i} is an even number`);
//     }else{
//     console.log(`${i} is an odd number`);
// }
// }
// console.log ("---------")
// Exercise 2

// 2. Write a JavaScript for loop that will go through the variable names
// • if the item is not a string, go out of the loop.
// if the item is a string, display it.

// let names= ["john", "sarah", 23, "Rudolf",34]
// for (let i of names){
//     //console.log(i);
//     if (typeof i == 'string') {
//         console.log(i)
//     }
// }

// 1. Write a JavaScript for loop that will go through the variable names.
// • if the item is not a string, pass.
// • if the item is a string, check if it's first letter is in uppercase. If not, change it to uppercase and then display the name.


let names= ["john", "sarah", 23, "Rudolf",34]
for (let i of names){
    //console.log(i);
    if (typeof i != 'string') {
        continue;
    }else {
        let firstLetter = i[0];
        let restWord = i.substr(1);
        if (firstLetter.toUpperCase () == true){
            console.log (i);
         }else{
            firstLetter = firstLetter.toUpperCase();
            let newName = firstLetter + restWord
            console.log(newName);        
         }
    }
}
console.log ("---------")

let nam= ["john", "sarah", 23, "Rudolf",34]
for (let fname of nam){
    //console.log(fname);
    if (typeof fname != 'string') {
    continue;
    }
    let firstLett = fname[0];
    let restOfWord = fname.substr(1);
    if (firstLett.toUpperCase () == true){
        console.log (fname);
    }else{
            console.log(firstLett.toUpperCase() + restOfWord);        
    }
}
