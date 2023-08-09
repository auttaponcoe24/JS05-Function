console.log("anonymous");

// #1 : Named fn, FN Declaration
// function add () {}

// #2 : Anonymous

// IIFE : Intermediate Invoke Function
// (function (x, y) {
//   console.log(x + y);
//   return 5;
// })(10, 5); // 15

// let a = (function (x, y) {
//   return x + y;
// })(10, 7);

// console.log(a); // 17

// #2B

// VARIABLE = EXPRESSION
let myVar = ((2 * 2) % 7) + 2;

// VARIABLE = FN (FN == EXPRESSION) เป็นการ assige fn ให้ตัวแปร ไม่ว่าจะมีชื่อ หรือไม่มี
const myFunc = function (x, y) {
  return x + y;
};
console.log(myFunc(5, 10)); //15

// ### Anonym (Modern : Arrow Syntax)

let a = function (x) {
  return x ** 2;
};

// A : Shortest
let b = (x) => x ** 2;
let b1 = x => x ** 2;

// B : Bracket
let c = (x, y) => {
  let result = x + y;
  return result;
};
let c1 = (x, y) => { return x + y;}
console.log(a(3)); //9
console.log(b(3)); //9
console.log(c(3, 3)); //6
