//WITHOUT THE COLORS

//SOLUTION #1
let astherix = "* "
for (let star = 1; star <= 6; star ++){
    console.log(astherix.repeat(star))
}

//SOLUTION #2
let stars = " ";
for (let i=0; i<=5;i++){
    stars+= "*";
    console.log(stars)
}

//NESTED LOOP

let st = [];
for (let i = 1; i < 7; i++) {
	let line = ""
	for (let counter = 1; counter < 7; counter++) {
		line += "* "
	}
	st.push(line);
}
console.log(st.join("\n"));
