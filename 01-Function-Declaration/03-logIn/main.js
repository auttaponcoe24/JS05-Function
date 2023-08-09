

// Define
function login (username, password) {
    if (username === 'admin' && password === 'P@ssw0rd') {
        alert('Login OK')
    } else {
        alert('Login False')
    }
}
let userName = prompt("Enter UserName");
let pass = prompt("Enter password");
// call
login(userName, pass);