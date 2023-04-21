/*
Count The Shouts
You have been tasked with writing a function that will count up all of the words in a list that are 'shouted'. Any words that have an exclamation mark at the end are considered to be shouted.

The function will take an array of words represented as strings. The function should return the count of how many words in the array are shouted.

A sample array of words might look like:

['hello', 'apple', 'wow!', 'here', 'window!', 'car'];
Examples of the function:

countTheShouts(['hello', 'apple', 'wow!', 'here', 'window!', 'car']);
// returns 2
countTheShouts(['picture', 'mystery', 'dog', 'pizza', 'hey', 'llama']);
// returns 0
*/

// This is what I have written in the exam.
// Not working.
function countTheShouts(strings) {
    // write your code here
}

// This code passes all the tests.
function countTheShouts2(strings) {
    let count = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].slice(-1) == "!") {
            count++;
        }
    }
    return count;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function countTheShouts3(strings) {
    let r = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes('!')) {
            r++;
        }
    }
    return r;
}