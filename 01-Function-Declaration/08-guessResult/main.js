// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
function squareNum(num) {
  const result = num * num;
}

console.log(squareNum(2)); // * เป็น undefined เนีื่องจาก log fn ที่ไม่มีการ return ค่าออกมา ถ้าใน fn ได้ return result ออกมา log fn จะได้ผลลัพธ์เป็น 4 ที่ได้ return ค่ามา
// ```