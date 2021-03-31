//Variables and DataTypes
var x = 10; //Number
console.log(typeof x);

var firstName = "John"; //String
console.log(typeof firstName);

var y = 5;
var isGreater = (x > y); //Boolean
console.log(typeof isGreater);

var groceryCart = ["Apple", "Banana"]; //Array
console.log(typeof groceryCart);
console.log(groceryCart[0]);

var pet = { //Object
  species: "dog",
  age: "5",
  petName: "Spot"
};
console.log(typeof pet);
console.log(pet.species);
console.log(pet.petName);

function multiply(a,b) { //Function
  return a*b;
}
var result = multiply(4,5);
console.log(result);

function sumAll() { //Functions + Arguments + For Loops
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}
var wallet = sumAll(20, 5, 50, 10);
console.log(wallet);

//For/In Loops
var id = "";
var z;
for (z in pet) {
  id += pet[z];
}
console.log(id);

//While Loops
var flag = false;
while (!flag){
  for (var i = 0; i < 5; i++){
    console.log(i);
    if (i == 4) {
      flag = true; // Breaks while loop
    }
  }
}

// If-Else
var theNumber = 5
if (theNumber % 2 == 0){
  console.log("The number is Even");
}
else {
  console.log("The number is Odd");
}

// Switch
var day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 56:
    day = "Saturday";
}
console.log("Today is " + day);
