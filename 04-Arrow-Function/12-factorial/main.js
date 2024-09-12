// ให้เขียนฟังก์ชันคำนวณค่า factorial
// 4! = 4 * 3 * 2 * 1
//     n * n-1 * n-2 * n-3 = n-i
const factorial = num => {
    let sum = 1;
    for(let i = 1; i <= num; num--) {
        sum *= num;
    }
    return sum;
}