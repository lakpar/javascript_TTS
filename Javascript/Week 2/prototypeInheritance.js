// prototype property allows you to add new properties to object constructors

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  
  // Add property to car using prototype
  Car.prototype.engine = "Gas";
  
  var firstCar = new Car("Mazda", "Miata", 2002, "Red");
  console.log(firstCar);
  console.log(firstCar.engine);
  firstCar.engine = "Electric";
  console.log(firstCar.engine);
  
  //Inheritance
  
  function Truck(make, model, year, color,towingCapacity) {
    Car.call(this, make, model, year, color);
    this.towingCapacity = towingCapacity;
  }
  Truck.prototype.tow = function(weight){
        if (this.towingCapacity > weight){
        console.log("Towing Possible");
      } else {
        console.log("Towing Not Possible");
      }
  }
  
  
  var firstTruck = new Truck("Ford", "F150", 2020, "Black", 1000);
  console.log(firstTruck);
  firstTruck.tow(400);