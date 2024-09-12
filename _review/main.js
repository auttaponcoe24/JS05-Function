/* 
### การเขียนฟังก์ชันมี 2 แบบหลักๆ
1. Function Declaration / Named Function 
2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function

*/

/* 
การใช้งานฟังก์ชันต้อง
1. ประกาศฟังชัน => กำหนดชื่อ, input
2. เรียกใช้นงาน

*/

// 1 Define
function sayHi (name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

// 2 Call
sayHi('John', 'Doe'); // Hello John Doe
sayHi('Auttapon', 'chucheun');

// RETURN VALUE
function add(x, y) {
    let result = x + y;
    return result;
}
add(5, 6);

console.log(11 === add(5, 6)); // true DONE:add(5,6) === result

let r = add(5,6); // reusable result
console.log(r);
console.log(r);

console.log(add(5,6)); // one time use
console.log(add(5,6)); // one time use


function isEven(n) {
    // if(n % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return n % 2 == 0;  
}
console.log(isEven(5)); // false
console.log(isEven(6)); // true

// CheckPoint
// - Declare : ประกาสเป็น
// - Params : รับ Inpu
// - Return : เข้าใจเรื่อง Return
// - Call : รันฟังก์ชัน

// ## FN EXPRESSION


console.log(myFunc(5,2));

// Anonhmojs FN

// SYNTAX : FN EXPRESSION
// อธิบาย : กำลัง assign Anonymus fn ให้กับตัวแปร sayHello

const sayHello = function (name) {
    console.log('Hi ' + name);
};
sayHello('Expression'); // Hi Expression

// 1. function add () {}
// 2A. let add = function () {}
// 2B. let add = () => {}

const minus = (a, b) => {
    return a - b;
};
minus(6,3) // 3;

const minusTwo = a => a - 2;
minusTwo(5); // 3