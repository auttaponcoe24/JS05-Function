// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

const checkPrime = (num) => {

        let isPrime = true;
        for(let divider = 2; divider < num; divider++){
            if(num % divider == 0) {
                return alert(`Prime is ${false}`);
            }
        }
        return alert(`Prime is ${isPrime}`);
}

checkPrime(+prompt("Enter checkPrime Number?"));