// EXERCISE #2: : Divisible By Three
// Instructions
// Loop through the array above and determine whether 
//or not each number is divisible by three.
// Each time you loop console.log “true” or “false”.

//SOLUTION # FOR OF

// let numbers = [123, 8409, 100053, 333333333, 7];
// for (let i of numbers) {
// //console.log(i);
// if (i % 3 == 0){
//     console.log(`${i} true`);
// }else{
//     console.log(`${i} false`);
// }
// }


//SOLUTION #2 FOR (regular)

// let numbers = [122, 8405, 100053, 333333333, 7];
// for (let i=0; i<=4; i++){
// if (numbers[i] % 3 == 0){
// console.log(true);
// }else{
// console.log(false);
// }
// }

//SOLUTION #3 WHILE

// let numbers = [123, 8409, 100053, 333333333, 7];
// let i = 0;
// while(i <= 4)
// {
//     if(numbers[i] % 3 == 0)
//         console.log(true);
//     else
//         console.log(false);
//     i++;
// }


// console.log(--------)

// EXERCISE #3: Playing With Numbers
// Instructions
// 1. Console.log the sum of all the numbers in the age array.

//SOLUTION #1

// let age = [20,5,12,43,98,55];
// let sum = 0;
// for (let i of age) {
// sum += i;
//console.log(sum); HERE WILL SHOW EVERY STEP OF 
//THE CALCULATION PLUS THE FINAL SUM
// }
// console.log(sum);

//SOLUTION #2

// let age = [20,5,12,43,98,55];
// let sum = 0;
// for (let i = 0; i<=5; i++){
// sum+= age[i];

// }
// console.log(sum);

// 2. Console.log the largest age in the array.
let age = [20,5,12,43,98,55];
let max = age[0];
for(let i = 1; i <= 5; i++){
    if(age[i] > max) max = age[i];
    continue;
}
console.log(max);








