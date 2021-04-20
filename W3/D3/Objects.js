let icecreamShop = {
  address: "Tel Aviv",
  dateOfCreation: 1987,
  flavours: ["vanilla", "chocolate", "caramel"],
  scoops: [1, 2, 3, "bucket"],
  employees: {
    names: ["David", "John"],
    salary: [2000, 1800],
    currency: "$",
  },
};

// I want to console.log the name of the 2nd employee
console.log(icecreamShop.employees.names[1]);

// I want to console.log a sentence saying "John has a salary of $1800"
//OPTION #1
console.log(`John has a salary of ${icecreamShop.employees.currency}${icecreamShop.employees.salary[1]}`);
//OPTION #2
console.log(`${icecreamShop.employees.names[1]} has a salary of ${icecreamShop.employees.currency}${icecreamShop.employees.salary[1]}`);
//OPTION #3
let johnPosition = icecreamShop.employees.names.indexOf("John")
console.log(`John has a salary of ${icecreamShop.employees.currency}${icecreamShop.employees.salary[johnPosition]}`)

// I want to add the name of a new employee in the names property
icecreamShop.employees.names.push("Daniel");
console.log(icecreamShop.employees);