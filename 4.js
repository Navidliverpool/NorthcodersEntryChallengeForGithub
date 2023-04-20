/*
Make Alternating Array
This function will be called with an array and should return a new array containing only the alternate elements starting from index 0.

makeAlternatingArray(['hey', 'hi']);
// should return ['hey']
makeAlternatingArray(['a', 'b', 'c', 'd', 'e']);
// should return ['a', 'c', 'e']
makeAlternatingArray([100, 42, 99, 3, -5]);
// should return [100, 99, -5]
*/

function makeAlternatingArray(array) {
    // please complete this function ...
    let arrResult = [];
    if (array.length == 0 || array.length == 1) {
        return array;
    }
    for (let i = 0; i < array.length; i += 2) {
        arrResult.push(array[i]);
    }
    console.log(arrResult)

    return arrResult;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
function makeAlternatingArray2(array) {
    let r = [];
    let a = 0;
    for (let i = 0; i < array.length; i += 2) {
        r[a] = array[i];
        a++;
    }
    return r;
}

/*
    5 Passing
0 Failing

When passed an empty array, function returns that original empty array

    ✓  Well done!

 

When passed an array of one element, function will return the original array

    ✓  Well done!

 

When passed an array of one element, function will return the original array

    ✓  Well done!

 

When passed an array of multiple elements, function will return a new array of alternating items

    ✓  Well done!

logs

[ "a", "c", "e" ]

 

When passed an array of multiple elements, function will return a new array of alternating items

    ✓  Well done!

logs

[ 100, 99, -5 ]
    */