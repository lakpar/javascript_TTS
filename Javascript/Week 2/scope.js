//Local Scope Example

function cellPhone() {
    var smartPhone = "iPhone";
  }
  
  //console.log(smartPhone);
  // smartPhone variable is only within the scope of the function cellPhone
  
  //Global Scope Example
  var number = 10;
  
  function fiveTimes(){
    console.log(5*number);
  }
  
  fiveTimes();
  
  // Automatically Global Scope - Ask Question
  
  