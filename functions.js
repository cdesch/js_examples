
// Normal Function
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

console.log(myFunction(3,2));
//> Result of 3*2 is 6 in myFunction


// Anonymous Function
var myAnonymousFunction = function() {
  console.log("Printing from inside myAnonymousFunction")
}

myAnonymousFunction();
//Printing from inside myAnonymousFunction

console.log(myAnonymousFunction);
//> ƒ () {
//>  console.log("Printing from inside myAnonymousFunction")
//> }

console.log(myAnonymousFunction());
//> Printing from inside myAnonymousFunction
//> undefined

// Anonymous Function with Params
var myAnonymousFunctionWithParams = function(param1) {
  console.log(`Printing from inside myAnonymousFunctionWithParams, param1: ${param1}`)
}

myAnonymousFunctionWithParams("My Awesome Param");
//> Printing from inside myAnonymousFunctionWithParams, param1: My Awesome Param

// Arrow Function Expression
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const myArrowFunction = () => {
  console.log("printing from inside myArrowFunction");
}

myArrowFunction();
//> printing from inside myArrowFunction

const myArrowFunctionWithParams = (paramA) => {
  console.log(`printing from inside myArrowFunctionWithParams, paramA: ${paramA}`);
}

myArrowFunctionWithParams("NewParam");
//> printing from inside myArrowFunctionWithParams, paramA: NewParam
