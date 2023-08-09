// ผลลัพธ์ในบรรทัดที่มี \*, **, \*** และ \*\*\*\* มีค่าเป็นอะไรและเพราะอะไร

// ```js
const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // * From Matt to Sarah 
sendTo(null); // ** From null to undefined
// ```

// ```js
const sender2 = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** From Max to CC
sendTo('Ben', 'Jay'); // **** From Ben to Jay
// ```
