// printPrime
// ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข
// แสดง Prime number ทั้งหมด โดยแสดงตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

// ```js
// printPrime(7); // 2, 3, 5, 7
// printPrime(13); // 2, 3, 5, 7, 11, 13
// printPrime(14); // 2, 3, 5, 7, 11, 13
// ```

function checkPrime(num) {
    for (let divider = 2; divider < num; divider++) {
        if(num % divider == 0) {
            return false;
        }
    }
    return true;
}

function printPrime(limit) {
    let result;
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) {
            result = console.log(i);
        }
    }
    return result;
}

printPrime(+prompt("CheckPrime Number:"));
