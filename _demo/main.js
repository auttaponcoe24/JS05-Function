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

