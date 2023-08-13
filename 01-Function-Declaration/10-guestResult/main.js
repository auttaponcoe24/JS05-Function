// บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi);   // * ไม่ทำงาน เพราะ เรียกใช้ function ไม่ถูกต้อง
console.log(sayHi(10));  //  ** log fn เป็น undefined เนื่องด้วย fn sayHi ไม่มีการ return ค่า แต่ alert ออกมาเป็น Hi kid

