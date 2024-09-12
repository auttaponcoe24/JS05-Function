// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // * undefined เพราะ function ไม่มีการ return ค่าออกมา แต่จะ alert Hi, John มาเป็น Side effect
