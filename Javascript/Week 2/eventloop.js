//Event Loop
function second(){
    console.log('second'); // (4)
  }
  
  function third(){
    console.log('third'); //(6)
  }
  
  function output(){
    console.log('first'); // (2)
    second(); // (3)
    third(); // (5)
  }
  
  output(); // (1)
  
  // Queuing
  
  function outputQ(){
    console.log('first');
    setTimeout(second,0); // This does not output second as the callback function (second) is put into the message queue
    third();
  }
  
  outputQ();

  // A callback is a function passed as an argument to another function

function printer(text){
    console.log(text);
  }
  
  function myCalculator(x, y, callback){
    let result = x * y;
    callback(result);
  }
  
  myCalculator(5, 3, printer);
  
  