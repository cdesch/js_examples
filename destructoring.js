
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
//> "Bender"
console.log(nameB);
//> "Flexo"

