
// Normal Function
function multiply(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
//> console.log(multiply(3,2));
//> Result of 3*2 is 6 in multiply

function sum(a, b) {
  return a + b;
}
//> console.log(sum(1,2));
//> 3

// Anonymous Functions
const myAnonymousFunction = function() {
  console.log("Printing from inside myAnonymousFunction");
}
//> myAnonymousFunction();
//> Printing from inside myAnonymousFunction

//> console.log(myAnonymousFunction);
//> ƒ () {
//>  console.log("Printing from inside myAnonymousFunction")
//> }

//> console.log(myAnonymousFunction());
//> Printing from inside myAnonymousFunction
//> undefined

// Anonymous Function with Params
const myAnonymousFunctionWithParams = function(param1) {
  console.log(`Printing from inside myAnonymousFunctionWithParams, param1: ${param1}`);
}

//> myAnonymousFunctionWithParams("My Awesome Param");
//> Printing from inside myAnonymousFunctionWithParams, param1: My Awesome Param

// Arrow Function Expression
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const myArrowFunction = () => {
  console.log("printing from inside myArrowFunction");
}

//> myArrowFunction();
//> printing from inside myArrowFunction

const myArrowFunctionWithParams = (paramA) => {
  console.log(`printing from inside myArrowFunctionWithParams, paramA: ${paramA}`);
}

//> myArrowFunctionWithParams("NewParam");
//> printing from inside myArrowFunctionWithParams, paramA: NewParam

// Function Generators
// function* [name]([param[, param[, ... param]]]) {
//   statements
// }
function* generatorFunction() {
  const x = yield 1;
  console.log(x);
  //> 1
  const y = yield 2;
  console.log(y);
  //> 2
}

// let generator = generatorFunction();
// console.log(generator.next());
// // { value: 1, done: false}
// console.log(generator.next());
// // { value: 2, done: false}
// console.log(generator.next());

export {
  multiply,
  sum,
  myAnonymousFunction,
  myAnonymousFunctionWithParams,
  myArrowFunction,
  myArrowFunctionWithParams,
  generatorFunction
};