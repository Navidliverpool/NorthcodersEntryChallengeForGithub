/*
Count The Capitals
This function should take a string as its only argument and return the number of capital letters in that string.

Note: the input string will only contain letters and spaces.

Examples:

countTheCapitals("Northcoders")
// should return 1
countTheCapitals("lower")
// should return 0
countTheCapitals("Hello there WORLD")
// should return 6
*/

// This is what I have written on the exam day. Not working.
function countTheCapitals(string) {
    // write your code here
    var old = string.replace(/[A-Z]/g, '').length;
    return old;
}

// This method passes all tests.
function countTheCapitals2(string) {
    const onlyUpper2 = string.replace(/[^A-Z]/g, '');
    return onlyUpper2.length;
}

// I have written this solution about 3 months after the exam. I think it works. 
// Later I found out that countTheCapitals3() is not working properly.  
function countTheCapitals3(str) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            c++;
        }
    }
    return c;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
// Part 2 of writing this pseudocode.
function countTheCapitals4(string) {
    let a = 0;
    var result = string.split(' ').join('');
    for (let i = 0; i < result.length; i++) {
        if (result.charAt(i) == result.charAt(i).toUpperCase()) {
            a++;
        }
    }
    return a;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
// Part 3 of writing this pseudocode.
function countTheCapitals5(s) {
    let a = 0;
    var r = ' ';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase() && s[i] != r) {
            a++;
        }
    }
    return a;
}