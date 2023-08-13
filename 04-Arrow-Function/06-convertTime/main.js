// ให้เขียนฟังก์ชัน Convert day to second

// ABSTRACTION
// คิดก่อนว่าอะไรต้องเป็น Input

// DAY => SEC

// 1 DAY = 24 HR * 60 MIN * 60 SEC
// 1 DAY = 24 * 60 * 60
// 2 DAY = 24 * 2 HR * 60 MIN * 60 SEC
// 3 DAY = 24 * 3 HR * 60 MIN * 60 SEC

const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

const converDayToSec = day => {
    return console.log(`${day} Day = ${day * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN} Second`);
}

console.log(converDayToSec(2));


