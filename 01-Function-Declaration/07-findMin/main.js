// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
// ```

function max(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    let isNaN1 = isNaN(num1); // num1 = 1 => isNaN(num1) = false
    let isNaN2 = isNaN(num2);
    let isNaN3 = isNaN(num3);
    let isNaN4 = isNaN(num4);

    if (!isNaN1 && !isNaN2 && !isNaN3 && !isNaN4) {
        if(num1 > num2 && num1 > num3 && num1 > num4) {
            return num1;
        } else if (num2 > num3 && num2 > num4 && num2 > num1) {
            return num2;
        } else if (num3 > num1 && num3 > num2 && num3 > num4) {
            return num3;
        } else if (num4 > num1 && num4 > num2 && num4 > num3) {
            return num4;
        }
    } 
}

max();