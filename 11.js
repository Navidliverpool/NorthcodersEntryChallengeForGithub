/*
Find Common Items
This function will be called with two arrays. It should return an array of all the items that are present in both of the arrays.

If any item occurs multiple times in either input array, only one copy of that item should be present in the output array.

findCommonItems([], []); // should return []
findCommonItems(['a', 'b'], ['a']); // should return ['a']
findCommonItems(['a', 'b', 'c', 'd'], ['c', 'd', 'e', 'f', 'g']);
// should return ['c', 'd']
findCommonItems(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c', 'd']);
// should return ['a', 'b', 'c']
*/

// This is what I have written in the exam.
// Not working.
function findCommonItems(arr1, arr2) {
    // please complete this function ...
}

// This code passes all the tests.
function findCommonItems2(arr1, arr2) {
    // please complete this function ...
    let aa = [];
    console.log(arr1)
    console.log(arr2)
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                aa.push(arr1[i]);
                console.log(aa)
            }
        }
    }
    return aa;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function findCommonItems3(arr1, arr2) {
    let r = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] == arr1[i] && !r.includes(arr1[i])) {
                r.push(arr1[i]);
            }
        }
    }
    return r;
}