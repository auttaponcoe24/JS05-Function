{
    // Global Scope
    let message = 'hi';

    function sayHi() {
        // Function Scope
        let message = 'hello'
        console.log(`## ${message}`)
    }

    sayHi();
    console.log(message);
}

// veriable : message = identifier
let message = 'h';

// function : sayHi == identifier
function sayHi(m) {
    let message = 'a';
    console.log(m)
}