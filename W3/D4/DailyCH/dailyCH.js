// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.
// Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
// Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad!' 
//   --> the result is : 'This movie is good!'

//   Your string is : 'This dinner is bad!' 
//   --> the result is : 'This dinner is bad!'

let sentence = 'The dinner was not that bad , it was great';
// Split method: to conver an atring into an array
// We are using it becuase we want every word will be pushed inside
let sentence_array = sentence.split(" ");
console.log("sentence array", sentence_array)
// method : indexOf -> position of the word NOT and BAD

// POSITION OF THE "not" and "bad" -> returns as numbers
let wordNot = sentence_array.indexOf ("not");
let wordBad = sentence_array.indexOf ("bad");
console.log(`The word NOT is at the position ${wordNot}, the word BAD is at the position ${wordBad}`);

//we check if the piistion of the word "not" is before the position of the word "bad"
// AND we checked if the word "not" and the word "bad" exist inthe array
// if indexOf(item return -1 so it means that it doesnt exist)

if (wordNot < wordBad && wordNot != -1 && wordBad != -1){
    //splice 
    //        1. starting point: the poistion where we want to start adding or deleting
    //        2. how many items I want to remove
    //        3. the items I want to add, at the starting point
    sentence_array.splice(wordNot, wordBad - wordNot +1, "good")
    
    // To go from an array to a string we use .join
    let newSentence = sentence_array.join (" ")
    console.log (newSentence)
}