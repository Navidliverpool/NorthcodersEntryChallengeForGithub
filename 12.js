/*

Make Single Array
This function will be called with an array of sub-arrays. 
The sub-arrays will contain a mix of strings and numbers. 
The function should return a single array containing only the numbers in the same order, without any sub-arrays.

If passed an empty array the function should return an empty array.

A typical array of sub-arrays is shown below:

[
    [1, 2, 3],
    ['a'],
    [5, 'b'],
    [7, 'c', 9]
];
Examples:

makeSingleArray([]); // should return []

makeSingleArray([ [1, 2] ]); // should return [1, 2]

makeSingleArray([ [1, 2], ['b', 3] ]); // should return [1, 2, 3]
*/

// This code passes all the tests.
function makeSingleArray(arr) {
    // write your code here
    const r = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length <= 1) {
            console.log("the length of arr is <= 1")
            if (!isNaN(arr[i])) {
                console.log("the arr[i] is a number: ", arr)
                console.log(arr[i])
                return arr[i];
            }
        }
        for (let j = 0; j < arr[i].length; j++) {
            if (!isNaN(arr[i][j])) {
                r.push(arr[i][j]);
            }
        }
    }
    console.log(r)
    return r;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function makeSingleArray2(arr) {
    let r = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof(arr[i][j]) == 'number' && !r.includes(arr[i][j])) {
                r.push(arr[i][j]);
            }
        }
    }
    return r;
}
console.log(makeSingleArray([
    [1, 2],
    ['b', 3]
]))