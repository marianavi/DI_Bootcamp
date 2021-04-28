// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

let userStar = prompt("Write five words separeted by commas");
let userArray = userStar.split(',');
// console.log(userArray[0]);
//console.log(userArray); 
let longestWord = userArray[0].length;
for(let i=1; i <= userArray.length - 1; i++){
    if(longestWord < userArray[i].length - 1){
        longestWord = userArray[i].length - 1;
    }
let stars = "" //THIS IS ONLY THE COUNTER OF THE HORIZON STARS (*********)
for(let i = 0; i < longestWord +4; i++){
    stars += '*';
}
console.log(stars);

for(let i = 0; i < userArray.length; i++){
    console.log('* ' + userArray[i] + ' *')
}
console.log(stars);
