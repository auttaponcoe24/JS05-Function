// บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi);   // ไม่ทำงาน เพราะ เรียกใช้ function ไม่ถูกต้อง
console.log(sayHi(10));  // เป็น undefined แต่ alert ออกมาเป็น Hi kid / เป็น undefined เนื่องด้วย function ไม่มีการ return

