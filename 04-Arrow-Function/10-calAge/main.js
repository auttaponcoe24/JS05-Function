// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

// year = 2020 - ปีเกิด
// day = (2020 - ปีเกิด) * 265 day

// 1 year * 12 month * 31 day => day of year 265 วัน

// ถ้าเกิน 1/12/2020 แสดงว่ามีอายุ 1 ปี 31 วัน

const leapYear = (year) => {
    if(year % 100 === 0) {
        if(year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    } else if(year % 4 === 0) {
        return 29;
    } else {
        return 28;
    }
}


const calAge = (birth, year) => {
    let sum = 0;
    for(let i = birth; i <= year; i++) {
        for(let j = 1; j <= 7; j++) {
            sum += 31;
        }
        for(let j = 1; j <= 4; j++) {
            sum += 30;
        }
        sum += leapYear(i);
    }
    return sum;
}