// EXERCISE
//function and a conditionals

//ANSWER #1
function isEnoughMoney(money, item, costItem) {
    if (money > costItem){
    console.log(`You can buy a ${item}`);
    }else{
    console.log(`Sorry, You can buy a ${item}`);   
    }
}

isEnoughMoney(10000, "computer", 200)
isEnoughMoney(10000, "kitchen", 30000)
isEnoughMoney(1000, "camera", 800)

console.log("------")

//ANSWER #2
function isenoughMoney(wants) {
    if (wants.money > wants.cost) {
        console.log(`Im happy , I bought a ${wants.thing}`)
    } else {
        console.log(`Im sad, I need more ${wants.cost - wants.money}$ to buy it`)
    }
}
isenoughMoney({"money": 10000, "thing" : "computer", "cost" : 200})
isenoughMoney({"money":10000, "thing": "kitchen", "cost": 30000})
