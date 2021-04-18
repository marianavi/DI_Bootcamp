// Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// If x equals 5 and y equals 2, the program should display:
// x is the biggest number

        // let x = 10
        // let y = 5
        // if (x>y) 
        // {
        //     console.log("x is bigger than y");
        // }
        // else if (x==y)
        // {
        //     console.log("x is equal to y")
        // }
        // else 
        // {
        //     console.log("x is smaller than y")
        // }

        

// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”. 
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase 
// (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

        // let newDog= "Chihuahua"
        // let letters = newDog.length;
        // console.log(`The number of letters is ${letters}`);
        // console.log(newDog.toUpperCase());
        // console.log(newDog.toLowerCase());
        // if (newDog == "Chihuahua")
        // {
        //     console.log("I love Chihuahuas, it’s my favorite dog breed")
        // }
        // else 
        // {
        //     console.log("I dont care, I prefer cats");
        // }


// Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

        // let number = prompt ("Please enter a number");
        // if (number % 2 == 0)
        // {
        //     console.log(`${number} is an even number`);
        // }
        // else if (number % 2 == 1)
        // {
        //     console.log(`${number} is an odd number`);
        // }

// Exercise 4 : Switch Case
// Instructions
// Using this function, answer the questions below:

// let whatHappens;
// let direction;

// switch (direction) {
//     case "forward":
//         break;
//         whatHappens = "you encounter a monster";
//     case "back":
//         whatHappens = "you arrived home";
//         break;
//         break;
//     case "right":
//         whatHappens = "you found a river";
//         break;
//     case "left":
//         break;
//         whatHappens = "you run into a troll";
//         break;
//     default:
//         whatHappens = "please enter a valid direction";
// }
// console.log(whatHappens);


        // What is the value of the whatHappens variable, when the value of the direction variable is “forward”
        // NOTHING because there is a break before the command

        // What is the value of the whatHappens variable, when the value of the direction variable is “back”
        // The command runs becuase it comes before the break

        // What is the value of the whatHappens variable, when the value of the direction variable is “right”
        //The command runs even there are two breaks; the second break is unreachable

        // What is the value of the whatHappens variable, when the value of the direction variable is “left”
        //NOTHING, the instruction is unreachable too.

//To run each case it should be:

        // let whatHappens;
        // let direction;

        // switch (direction) {
        //     case "forward":
        //         whatHappens = "you encounter a monster";
        //         break;
        //     case "back":
        //         whatHappens = "you arrived home";
        //         break;
        //     case "right":
        //         whatHappens = "you found a river";
        //         break;
        //     case "left":
        //         whatHappens = "you run into a troll";
        //         break;
        //     default:
        //         whatHappens = "please enter a valid direction";
        // }
        // console.log(whatHappens);


// Exercise 5: Group Chat
// Instructions
// Using the array above, console.log the number of users in a group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number 
// of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online

        // let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
        // let usersOnline = users.length;
        // if (usersOnline == 0) 
        // {
        //     console.log('No one is online');
        // }
        // else if (usersOnline ==1)
        // {
        //     let userOne = users[0];
        //  console.log(`${userOne} is online`);
        // }
        // else if (usersOnline ==2)
        // {
        //     let userOne = users[0];
        //     let userTwo = users[1];
        //  console.log(`${userOne} and ${userTwo} are online`);
        // }
        // else if (usersOnline >2)
        // {
        //     let userOne = users[0];
        //     let userTwo = users[1];
        //     let userX = usersOnline-2;
        //     console.log(`${userOne} and ${userTwo} and ${userX} more are online`);
        // }