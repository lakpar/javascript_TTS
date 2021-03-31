// JSON methods
let string = JSON.stringify(
    {
        "promotion": false,
        "menu": ["pizza", "fries", "hamburger", "salad", "ice cream"],
        "customers": ["Laks", "Bin", "Vel", "George"]
    }
)

console.log(string);
console.log(JSON.parse(string).customers);

var customers = JSON.parse(string).customers;
console.log(customers);

for (let i = 0; i < customers.length; i++){
  console.log(customers[i]);
}