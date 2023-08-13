// test push, feedback branch
// update solution

// Define
function soundOfBird() {
    console.log('hello world')
    console.log('jjjj')
}

soundOfBird();

function isPrime(n) {
    // let n = 5;
    let isPrime = true;
    for (let divider = 2; divider < n; divider++) {
        if(n % divider == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n)
}
isPrime(5);

// 
function add(x, y) {
    return x + y;
}

// Fn Expression
const minus = function (x, y) {
    return x - y;
}

// Fn Expression (Arrow)
const multiply = (x, y) => x * y;
const log = console.log; // log = FN

log(add(5, 2)); // undefined
// console.log(multiply(5, 2));

// ########## Object #################

const user = {
    name: 'John',
    age: 33,
    isMarried: false,
    address: {
        village: 'Ladda Land',
        province: 'Chiang Mai',
    },
};

// GET Data
log(user.name); // John
log(user['name']); // John

let a = 'name';
log(user.a); // วิ่งไปหา key a => undefined
log(user[a]) // user['name'] => John 
// Note : เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง access ผ่าน []

// DELETE
delete user.isMarried;
log(user);
delete user['age'];
log(user);

let b = 'address'
delete user[b];
log(user);

// UPDATE
let x = 5;
x = x + 2;
x += 2;
// container = value + 2;

user.age = user.age + 1;
user.age += 1;
log(user.age); // 35
// container = value + 1;

user['age'] = user['age'] + 5;
log(user.age); // 40

user['age'] += 5;
log(user.age); // 45

user['age']++;
log(user.age); // 46

// user key variable
let key = 'age';

// Computed key
user[key] = user[key] + 5;
// user['age'] = user['age'] + 5;
log(user.age); // 51

user[key] += 1;
user[key]++;
log(user.age); // 53

// Critical Point
// Bracket notation ใช้กับคีย์ที่เป็น string หรือ ตัวแปรที่เก็บ string
// - for( <key> in <obj>) JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj[key] = obj[key] + new => container = value + new