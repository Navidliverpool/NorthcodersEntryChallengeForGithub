/*
Find The Knife And Fork
You have been asked to locate a knife and fork for dinner time in an assortment of kitchen items.

This function should take an array containing strings representing different items of cutlery, and find the index of both the string knife and also the string fork.

The function's return value should be an object with two properties, knife and fork, which contain the index positions of the knife and fork from the input array.

If either the knife and/or fork is not present in the input array, that property's return value should be -1.

You can assume that there will never be more than 1 knife or 1 fork in the input array.

Example:If the knife was in index 1 and the fork in index 3, the object would look like the following:

{ 
  knife: 1,
  fork: 3
}
findKnifeAndFork(['knife', 'apple', 'spoon', 'spatula', 'fork']);
// should return { knife: 0, fork: 4 }
findKnifeAndFork(['scissors', 'cup', 'fork', 'knife', 'spatula', 'whisk']);
// should return { knife: 3, fork: 2 }
findKnifeAndFork(['cup', 'whisk', 'spoon', 'knife']);
// should return { knife: 3, fork: -1 }
*/

// This method passes all tests.
function findKnifeAndFork(utensils) {
    const obj = {}
    if (!utensils.includes("knife")) {
        obj.knife = -1;
    }
    if (!utensils.includes("fork")) {
        obj.fork = -1;
    }

    for (let i = 0; i < utensils.length; i++) {
        if (utensils[i] == "knife") {
            obj.knife = i;
        } else if (utensils[i] == "fork") {
            obj.fork = i;
        }
    }
    return obj;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function findKnifeAndFork2(utensils) {
    let obj = {
        knife: -1,
        fork: -1
    }
    for (let i = 0; i < utensils.length; i++) {
        if (utensils[i] == 'knife') {
            obj.knife = i;
        }
        if (utensils[i] == 'fork') {
            obj.fork = i;
        }
    }
    return obj;
}