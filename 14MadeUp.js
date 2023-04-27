// QUESTION:  Find the elements of arr2 which does not exist in arr1. 
// EXAMPLE:
// arr1: ['a', 'b', 'c']
// arr2: ['a', 'b', 'c', 'd']
// RESULT:  ['d']
function findCommonItems(arr1, arr2) {
    let r = [];
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            r.push(arr2[i])
        }
    }
    return r;
}
console.log(findCommonItems(['a', 'b', 'c'], ['a', 'b', 'c', 'd']))