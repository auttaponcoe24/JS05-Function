// ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

// f to c
// สูตร Tc = (Tf - 32) * (5/9)

const tempConvert = (faren) => {
    return console.log(`${faren} farenheit = ${(faren - 32) * (5/9)} celsius`);
}

tempConvert(68);