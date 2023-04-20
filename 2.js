/*
Remove Last Item
This function should take an array and return the same array but with the last item removed.

removeLastItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// should return [1, 2, 3, 4, 5, 6, 7, 8, 9]
removeLastItem(['a', 'b', 'c', 'd', 'e']);
// should return ['a', 'b', 'c', 'd']
*/

function removeLastItem(arr) {
    arr.pop();
    return arr;
}