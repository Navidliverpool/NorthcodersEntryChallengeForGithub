/*
Truncate String
Truncate a String

This function will receive two arguments: a string (str) and a value (n). If the length of the string (str) is greater than the value (n), it should return a truncated string of length (n) followed by ...

If the string is the same length or shorter than (n), it should return the original string unaltered.

truncateString("I like to move it, move it", 8)
// Should return "I like t..."
truncateString("This is ground control to Major Tom", 14)
// Should return "This is ground..."
truncateString("This is not the greatest song in the world", 45)
// Should return "This is not the greatest song in the world"
*/

// This method passes all the tests.
function truncateString(str, n) {
    let r;
    r = str.slice(0, n);
    if (n >= str.length) {
        return str;
    }
    console.log(r)
    return r + "...";
}

// This is what I have written in the exam.
// Not working.
function truncateString2(str, n) {
    // please complete this function ...
    let result = "";
    if (n > str.length) {
        return
    }
    for (let i = 0; i <= n - 1; i++) {
        result += str[i];
    }
    result + "...";
    return result;
}

/*
1 Passing
3 Failing

When n is greater than the length of the string, function will return unaltered string

  ✕ AssertionError: expected 'This is not the greatest song in the …' to equal 'This is not the greatest song in the …'

 

When n is equal to the length of the string, function will return unaltered string

    ✓  Well done!

 

When n is less than the length of the string, function will return truncated string

  ✕ AssertionError: expected 'Couldn\'t remember' to equal 'Couldn\'t remember...'

 

When n is less than the length of the string, function will return truncated string

  ✕ AssertionError: expected 'This IS' to equal 'This IS...'
*/

// I have written this solution about 3 months after the exam. I think it works. 
// I tried one test and It passed it. 
function truncateString3(str, n) {
    let r = '';
    for (let i = 0; i < n; i++) {
        r += str[i];
    }
    return r + '...';
}