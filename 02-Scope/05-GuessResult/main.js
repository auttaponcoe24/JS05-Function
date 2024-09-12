// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); //  * log นี้จะออกมาเป็น Hello everybody เพราะมีการ เป็นผลของ message เป็น Hello everybody
}

logMessage(message);
console.log(message); // ** เป็น Welcome to Thailand เพราะ ตัวแปร message เป็นตัวแปร globla ไม่ได้เรียกใข้งาน fn
// ``` 

// ```js 
let name = "John";

function sayHi(input) {
  console.log(name); // ***  John log มาจาก ตัวแปร name ที่ได้รับมาจาก let name ฝั่ง global
  name = input;
}

sayHi();
console.log(name); // **** John log มาจาก ตัวแปร name ที่ได้รับมาจาก let name ฝั่ง global
// ```
