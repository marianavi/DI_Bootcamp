//EXERCISE 2
// For each of the questions, find 2 WAYS to access :

// 1. The div node

// 2. The ul nodes, and render all of it's children one by one

// 3. The first li of each ul

let div = document.getElementsByTagName('div')[0];
console.log(div);

let list = document.getElementsByClassName('list');
console.log(list[0].innerHTML); //innerHTML is what is inside of the element

for (i of list){
    console.log(i.children[0]);
}

for (i of list){
    let ulChild = i.children;
    for (child of ulChild){
        console.log(child);
    }
}