// บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefined เนื่องจาก fn square ไม่มีการ return ค่าส่งกลับไปให้ใข้
// ```

// ```js
const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** แสดงค่าออกมาได้ เนื่องจากรูปแบบ fn calcCirecleArea ที่สร้าง อยู่ในรูปแบบสั้นหรือบรรทัดเดียว ไม่จำเป็นต้งมี {} เพราะ การ => arrow ถือว่าเป็นการ return ค่าแล้ว
// ```
