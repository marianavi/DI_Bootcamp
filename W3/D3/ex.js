//Exercise 1
// Create a structured HTML file linked to a JS file
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

// for (let counter = 1; counter <= 15; counter ++){
//     if (counter % 2 == 0){
//         console.log(counter + "is an even number")
//     }
//     else {
//         console.log(counter + "is an odd number")
//     }
// }

let userName = prompt("What is your name?")
while (userName == "David") {
    console.log("In the while loop")
    userName = prompt("What is your name?")
}