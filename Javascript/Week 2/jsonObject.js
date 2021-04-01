var objJSON = {};
console.log(objJSON);

objJSON["HotelShoppingRS"] = {};
console.log(objJSON);

objJSON.HotelShoppingRS["Documents"] = {};
console.log(objJSON);

objJSON.HotelShoppingRS.Documents["Name"] = "Clarity NDC Gateway";
objJSON.HotelShoppingRS.Documents["ReferenceVersion"] = "1.0";
console.log(objJSON);

for (x in objJSON.HotelShoppingRS.Documents){
  console.log(x);
}

//JSON Object iteration
var newJSON = {};
var garage = ["Ford F150", "BMW 320i", "Honda Fit"];
newJSON["Garage"] = {};
for (x = 0; x < garage.length; x++){
  var key = "Car " + (x+1)
  newJSON.Garage[key] = garage[x];
}

console.log(newJSON);