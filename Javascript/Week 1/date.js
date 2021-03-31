//Date Functions

var today = new Date();
console.log(today);

var nextYear = new Date(2022,0,1); // YYYY MM DD; Month starts at 0
console.log(nextYear);

//UTCString
console.log(nextYear.toUTCString());

//More Readable Date String
console.log(nextYear.toDateString());

//ISO Date formate
console.log(nextYear.toISOString());

function daysBetweenDates(x,y) {
  return (y-x) / 1000 /86400;
}

var timeBetween = daysBetweenDates(today,nextYear);
console.log(timeBetween + " Days");