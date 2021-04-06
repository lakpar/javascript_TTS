//Search 
// RegExp() Constructor
var garage = ["Ford F150", "BMW 320i", "Honda Fit"];
function carCheck(carlist, brand){
  let x = false;
  let re1 = new RegExp(brand,"i"); //case insensitive
  for (var n in carlist) {
    if (carlist[n].search(re1) >= 0){
      x = true;
      break;
    }
  }
  return x;
}
console.log(carCheck(garage,"BMW"));
console.log(carCheck(garage,"bmW"));


let regE = /Laks/i; //case insensitive
let regEx = /Laks/;
let regF = "laksman";
console.log(regE.test(regF))
console.log(regEx.test(regF))

//URL check/validation
function dotCom(some){
  let com = /.*\.com$/;
  console.log(com.test(some));
}

dotCom("www.google.com");
dotCom(".com.google");
dotCom("www.google.ca");