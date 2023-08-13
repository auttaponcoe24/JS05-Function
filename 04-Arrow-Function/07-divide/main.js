// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

const divide = (num) => {
    if (num % 7 == 0) {
        return true;
    } else {
        return false;
    }
}

divide(+prompt('divid 7?'))