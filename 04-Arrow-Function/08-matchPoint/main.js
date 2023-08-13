// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

// TEAM
// TOTAL MATCH : 38 [ignore]
// WIN : 28 => 28 * 3 = 83 [significant]
// DRAW : 5 => 5 * 1 = 5 [significant]
// LOSE : 5 => 5 * 0 = 0 [ignore]

// TOTAL : 89

// ABSTRACTION
// HIDING COMPLEXITY
// EASY INTER


const calMatchPoint = (win, draw) => win * 3 + draw;
