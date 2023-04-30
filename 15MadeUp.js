// QUESTION:  Find the characters in the array. 
// EXAMPLE:
// arr: [ [1, 2], ['b', 3] ]
// RESULT:  ['b']
function makeSingleArray(arr) {
    let r = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (typeof arr[i][j] !== 'number') {
                r.push(arr[i][j])
            }
        }
    }
    return r;
}
console.log(makeSingleArray([
    [1, 2],
    ['b', 3]
]))