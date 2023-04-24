/*
Who Is The Oldest
This function will receive an array of objects. Each object will represent a person with a name and an age property. The function should return the name of the person who is oldest.

If the array is empty, the function should return "no people found".

Note: all people will have different ages.

Examples:

findOldestPerson([
  { name: 'Liam', age: 28 },
  { name: 'Eli', age: 37 },
  { name: 'Poonam', age: 22 },
  { name: 'Cameron', age: 32 }
]);
// Should return 'Eli'
findOldestPerson([]);
// Should return 'no people found'
*/

// This is what I have written in the exam.
// Not working.
function findOldestPerson(people) {
    // please complete this function ...
    if (Object.keys(people).length == 0) {
        return "no people found";
    }
    // people.forEach(function (arrayItem) {
    // });
    let count = 0;
    var result = myArray.find(item => item.age);
    for (let i = 0; i < result; i++) {
        if (result[i]) {}
    }
}

// This code passes all the tests.
function findOldestPerson2(people) {
    console.log(people)
    if (people.length == 0) {
        return "no people found";
    }
    let result;
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > count) {
            count = people[i].age;
            result = people[i].name;
        }
    }
    console.log(result)
    return result;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function findOldestPerson3(people) {
    let r = people[0].age;
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > r) {
            r = people[i].age;
        }
    }
    return r;
}