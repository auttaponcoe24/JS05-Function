// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
function sayHi(name) {
  let name = "Guest";
  console.log(name); // * error เพราะ function กำหนดชื่อตัวแปร name ให้มาก่อนแล้ว แต่ ในการทำงานของ fn ยังมีการ assign let name ซึ่งชื่อตัวแปรเหมือนกัน
}

sayHi("Jim");
// ```
