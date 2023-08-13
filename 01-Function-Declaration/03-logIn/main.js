// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ


// Define
function login (username, password) {
    if (username === 'admin' && password === 'P@ssw0rd') {
        alert('Login OK')
    } else {
        alert('Login False')
    }
}
let userName = prompt("Enter UserName");
let pass = prompt("Enter password");
// call
login(userName, pass);