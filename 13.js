/*
Round Up to Nearest Multiple
This function should take two numbers as its arguments, n and x. 
It should round n up to the nearest multiple of x.

The function should return -1 when provided a 0 for the nearest multiple.

Examples:

nearestMultiple(21, 5);
// should return 25
nearestMultiple(4, 3);
// should return 6
nearestMultiple(4, 17);
// should return 17
nearestMultiple(41, 0);
// should return -1
*/

// This code passes all the tests.
function roundUpToNearestMultiple(n, x) {
    // write your code here
    const multipleOfX = x * x;
    let count = 0;
    console.log(n, x)
    if (x == 0) {
        return -1;
    }
    for (let i = 0; i < multipleOfX; i++) {
        if (n % x != 0) {
            n++;
        }
        count = n;
    }
    return count;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function roundUpToNearestMultiple2(n, x) {
    // let r = 0;
    // for (let i = 0; i < n; i += x) {
    //     x += i;
    // }
    let a = n / x;
    let r = Math.round(a);
    let rr = r * x;
    if (rr < n) {
        rr += x;
    }
    return rr;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
// Part 3 of writing this pseudocode.
function roundUpToNearestMultiple3(n, x) {
    while (n % x > 0) {
        n++;
    }
    return n;
}