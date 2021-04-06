// Javascript only hoists declarations not initializations.

// Case 1 - Declaration gets hoisted
x = "Hello World!";
console.log(x);

var x; 

// Case 2 - Initialization Does not get Hoisted;
var message1 = "Hello";
var message2 = "World";

console.log(message1 + " " + message2);

var message3 = "Apple";

console.log(message3 + " " + message4); // Undefined as message4 is iniitalized after and not hoisted
var message4 = "Computer";
