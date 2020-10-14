/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO your code:

const countChar = (string, letter) => {
    if ((string === null) || (letter === null)) {
        return -1;
    }

    else if (letter.length !==1) {
        return -1;
    }

    else {
           let countLetter= string.split(letter).length -1;
           return countLetter;
    }
}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof countChar, "function");
assert.strictEqual(countChar.length, 2);
// TODO add your tests:
assert.strictEqual(countChar(null, "a"), -1);
assert.strictEqual(countChar("", "a"), 0);
assert.strictEqual(countChar("hello", "h"), 1);
assert.strictEqual(countChar("abracadabra", "a"), 5);
assert.strictEqual(countChar("abracadabra", "b"), 2);
// End of tests
