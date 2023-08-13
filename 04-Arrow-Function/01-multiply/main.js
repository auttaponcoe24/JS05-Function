// - ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Arrow Function
// - ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 23 กับ 9

const multiply = (x, y) => {
    return x * y;
}

for(let i = 1; i <= 12; i++){
    console.log(`mutiply of 23 * ${i} = ${multiply(23, i)}, mutiply of 9 * ${i} = ${multiply(9, i)}`);
}