// isPrime ?
// จำนวนเฉพาะ (Prime Number) คือจำนวนเต็มบวกที่มากกว่า 1
// และมีตัวหารลงตัวที่เป็นจำนวนเต็มบวกอยู่แค่ 2 ตัวก็คือ 1 และตัวมันเอง

// เช่น
// เลข 17 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 17 เท่านั้นที่สามารถหารเลข 17 ลงตัว
// เลข 23 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 23 เท่านั้นที่สามารถหารเลข 23 ลงตัว
// เลข 24 ไม่เป็นจำนวนเฉพาะ เพราะมี 1,2,4,6,8,12,24 ที่สามารถหารเลข 24 ลงตัว

// TASK : ให้สร้างฟังก์ชันตรวจสอบตัวเลข ว่าเลขนั้นเป็นจำนวนเฉพาะหรือไม่


// Prime Number
// ตัวตั้ง n (Fixed)
// ตัวหาร dynamics => 1 loop

// let n = 7;
// let isPrime = true;

// for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(n);

// DESIGN FN
// 1-Input ? => number ที่ใช้เช็ค
// 2-Logic Implement ?
// 3-Output ? => boolean true, false
// number => bool


// ########### กรณีไม่ใช้ return
// function checkPrime(num) {
//     let isPrime = true;
//     for (let divider = 2; divider < num; divider++) {
//         if (num % divider == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(num);
// }

// function printPrime(limit) {
//     for (let n = 2; n <= limit; n++){
//         checkPrime(n);
//     }
// }

// printPrime(+prompt("checkPrime?"));


// ########### กรณีใช้ return
function isPrime(num) {
    let isPrime = true;
    for (let divider = 2; divider < num; divider++) {
        if(num % divider == 0) {
            return false;
        }
    }
    return true;
}

