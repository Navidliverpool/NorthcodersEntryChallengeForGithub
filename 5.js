/*
Noisy Pets
This function will be called with an array of objects. 
Each object represent a pet, and will have a name and a type property. 
The type property will be either "dog" or "cat". 
The function should update each of the object in the array by giving them a sound property, 
which should be "woof!" for dogs and "meow!" for cats.

A typical array looks like

[
  {
    name: 'Bolin',
    type: 'cat'
  },
  {
    name: 'Lily',
    type: 'dog'
  }
];
Examples:

addSoundToPets([{ name: 'Bolin', type: 'cat' }]);
// should return
[{ name: 'Bolin', type: 'cat', sound: 'meow!' }];
addSoundToPets([
  { name: 'Bolin', type: 'cat' },
  { name: 'Lily', type: 'dog' }
]);
// should return
[
  { name: 'Bolin', type: 'cat', sound: 'meow!' },
  { name: 'Lily', type: 'dog', sound: 'woof!' }
];
addSoundToPets([]);
// should return []
*/

// This code passes all tests.
function addSoundToPets4(pets) {
    console.log("input: ", pets)
    if (pets.length == 0) {
        return pets;
    }
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].type == "cat") {
            pets[i].sound = "meow!";
            console.log("yes there is a 'cat' value")
        } else if (pets[i].type == "dog") {
            pets[i].sound = "woof!";
            console.log("yes there is a 'dog' value")
        }
    }
    console.log("result: ", pets)
    return pets;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
function addSoundToPets5(pets) {

    if (pets[0].type == 'cat') {
        pets[0].sound = 'meow';
    } else {
        pets[0].sound = 'bark';
    }
    return pets;

}

// These methods below do not pass the tests.
// This is what I have written on the exam day. Not working at all.
function addSoundToPets(pets) {
    // write your code here
    let arr = [];
    let obj = {};
    if (!pets.hasOwnProperty("sound")) {
        console.log(arr)
        if (Object.values(pets)[1] == "cat") {
            obj.sound = "meow!";
            arr.concat(pets);
            arr.push(obj);
            console.log(arr)
        } else {
            obj.sound = "woof!";
            arr.push(obj);
        }
    }
    return arr;
}

// Here I am practicing on the Entry Challenge questions later after the exam.
// Not working.
function addSoundToPets2(pets) {
    console.log(pets)
    if (pets.length == 0) {
        return pets;
    }
    for (let i = 0; i < pets.length; i++) {
        if (!pets[i].hasOwnProperty("sound")) {
            if (Object.values(pets[i] == "cat")) {
                // pets.push(pets.sound == "meow !")
                pets.forEach(function(element) {
                    element.sound = "meow! ";
                    console.log(pets)
                    return pets;
                });
            } else if (Object.values(pets[i] == "dog")) {
                pets.forEach(function(element) {
                    element.sound = "woof! ";
                    console.log(pets)
                    return pets;
                });
            }
        }
    }
    return pets;
}

// Not working.
function addSoundToPets3(pets) {
    console.log("input: ", pets)
    if (pets.length == 0) {
        return pets;
    }
    for (let i = 0; i < pets.length; i++) {
        if (!pets[i].hasOwnProperty("sound")) {
            if (pets[i].type == "cat") {
                console.log("yes there is cat value")
                pets.forEach(function(element) {
                    element.sound = "meow!";
                    console.log(pets)
                    return pets;
                });
            } else if (pets[i].type == "dog") {
                pets.forEach(function(element) {
                    element.sound = "woof!";
                    console.log(pets)
                    return pets;
                });
            }
        }
    }
    return pets;
}



/*
0 Passing
4 Failing

When passed an empty array, function will return an empty array

  ✕ AssertionError: expected [ { sound: 'woof!' } ] to deeply equal []

logs

[ { "sound": "woof!" } ]

 

When passed an array containing a single dog object, function will add a "sound" property with a value of "woof!" to the pet object

  ✕ AssertionError: expected [ { sound: 'woof!' } ] to deeply equal [ Array(1) ]

logs

[ { "sound": "woof!" } ]

 

When passed an array containing a single cat object, function will add a "sound" property with a value of "meow!" to the pet object

  ✕ AssertionError: expected [ { sound: 'woof!' } ] to deeply equal [ Array(1) ]

logs

[ { "sound": "woof!" } ]

 

When passed an array containing multiple pets objects, function will add the appropriate sound to each pet object

  ✕ AssertionError: expected [ { sound: 'woof!' } ] to deeply equal [ { name: 'Padme', …(2) }, …(2) ]

logs

[ { "sound": "woof!" } ]
*/