/*
Staying The Night
This function will receive two arguments. The first argument will be an object representing the number of beds in a holiday home: 
the doubles key representing the number of double beds, and the singles key represents the number of single beds. 
The second argument will be the number of people who are planning to stay at this home.

The function should return true if there is enough bed space for the desired number of people to stay, and false if not.

Note: you may assume a double bed sleeps 2 people and a single bed sleeps 1.

Examples:

checkForEnoughBeds({ doubles: 3, singles: 1 }, 7)
// should return true
checkForEnoughBeds({ doubles: 2, singles: 5 }, 10)
// should return false
checkForEnoughBeds({ doubles: 6, singles: 0 }, 9)
// should return true 
*/

function checkForEnoughBeds(beds, numOfPeople) {
    console.log(beds)
    let sumValues = Object.values(beds).reduce((a, b) => (a * a) + b, 0);
    console.log(sumValues)
    if (sumValues >= numOfPeople) {
        return true;
    }
    return false;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
function checkForEnoughBeds2(beds, numOfPeople) {
    let a = beds.doubles;
    let b = beds.singles;
    if (a > 0) {
        a *= 2;
    }
    if (a + b == numOfPeople) {
        return true;
    }
    return false;
}

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it.  
// Part 2 of writing this pseudocode.
function checkForEnoughBeds3(beds, numOfPeople) {
    if (beds.doubles * 2 + beds.singles == numOfPeople) {
        // This line displys all keys of beds.
        console.log(Object.keys(beds))
        return true;
    }
    return false;
}

/*
3 Passing
0 Failing

If total number of beds is greater than the amount of people, function will return true

    ✓  Well done!

logs

{ "doubles": 3, "singles": 6 }

15

 

If total number of beds is equal to the amount of people, function will return true

    ✓  Well done!

logs

{ "doubles": 2, "singles": 6 }

10

 

If total number of beds is less than the amount of people, function will return false

    ✓  Well done!

logs

{ "doubles": 2, "singles": 2 }

6

 
*/