// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
const showModal = alert;
showModal("Execute modal"); // * return undefined แต่ alert เป็น Execute modal เพราะ showModal ได้มีการ assign fn alert เข้าไปใช้งานซึงนั้นหมายความว่า showMoal = alert
// ```

// ```js
const showModal2 = alert();
showModal2("Execute modal"); // ** error alert ค่าว่าง เพราะ showModal ได้เรียกใช้ fn alert() เปล่าว
// ```
