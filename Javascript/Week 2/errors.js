// Reference error
var x;

try {
  x = y + 5;
  
}
catch(err) {
  console.log("There was a " + err.name);
}

// Type error
// try+catch+finally
var total = 500;
try {
  console.log(total.toUpperCase());
}
catch(err){
  console.log("There was a " + err.name);
}
finally {
  console.log("FIVE HUNDRED");
}

var garage = ["Ford F150", "BMW 320i", "Honda Fit"];

function getCar(car){
  if (!garage.includes(car)) {
    throw new Error("This car is not available");
  }
  console.log(car + " is available");
}

getCar("Ford F150");
getCar("Honda Civic");