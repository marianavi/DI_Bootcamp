// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).

let planets = ["earth","venus","jupiter", "uranus","neptune"];
//2. For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".
for (let i = 0; i<planets.length; i++) {
	//create a variable : the name of a planet
		// 1st loop : planetName will be equal to "Earth"
		// 2nd loop : planetName will be equal to "Venus"
	let planetName = planets[i];
	//creating a div
	let divPlanet = document.createElement("div");
	divPlanet.style.color = "white";
	// adding a class "planet"
	// 3. Each planet should have a different background color. 
	//(Hint: add a new class to each planet).
	divPlanet.classList.add("planet", planetName);
	// create a text node
	let planetTxt = document.createTextNode(planetName);
	//append to each div the name of the planet //appendChild
	//where and what
	//what : planetTxt - where : divPlanet
	//where.appendChild(what)
	divPlanet.appendChild(planetTxt);
	//4. Finally append each div to the <section> in the HTML (presented below).
	//what : divPlanet - where : section 
	// retrieve the section
	let section = document.getElementsByClassName("listPlanets")[0];
	// append the div to the section
	section.appendChild(divPlanet)
}