// Create a structured HTML file, and add the code below in the body.
// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

let input = document.getElementById('button');
console.log(input);
input.addEventListener("click", insert_Row );
//---------------------------------------------
function insert_Row(){
let tableID = document.getElementById('sampleTable').insertRow(0);
let insert1 = tableID.insertCell(0);
let insert2 = tableID.insertCell(1);
insert1.innerHTML="New Cell 1";
insert2.innerHTML="New Cell 2";
}