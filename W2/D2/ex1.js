
// EXERCISE 1
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"


let driveCar = prompt ("What is your age?");{
    if (driveCar < 18){
        alert ("Sorry, you are too young to drive this car. Powering off");
     } else if (driveCar == 18) {
            alert ("Congratulations on your first year of driving. Enjoy the ride!");
            } else {
                alert ("Powering On. Enjoy the ride!");
                }            
    }

// EXERCISE 2
// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it


let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}


// EXERCISE 3
// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

