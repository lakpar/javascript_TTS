// String Methods

var car = "Toyota Camry"; //
var garage = ["Ford F150", "BMW 320i", "Honda Fit"];

console.log(garage.indexOf("Honda Fit"))

function Vehicle(carInfo){
  var tempInfo = carInfo.split(" ") // String Method - split()
  this.manufacturer = tempInfo[0];
  this.model = tempInfo[1];
}

var newCar = new Vehicle(car);
console.log(newCar.model);

newCar.model = "Corolla"; // Update Object property
console.log(newCar.model);

var firstName = "Roger";
var lastName = "Rabbit";
var fullName = firstName + " " + lastName; //String Concatenation
console.log(fullName);

//String Search
if (car.search("Camry")){
  console.log("Car is Camry");
} else{
  console.log("Car is not Camry");
}
