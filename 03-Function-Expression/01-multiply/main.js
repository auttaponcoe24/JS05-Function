// - ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Function Expression
// - ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 17 กับ 7

const multiply = function (x, y) {
    return x * y;
};

for(let i = 1; i <= 12; i++){
    console.log(`mutiply of 17 * ${i} = ${multiply(17, i)}, mutiply of 7 * ${i} = ${multiply(7, i)}`);
}
