/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO your code:

const sum = (array) => {
    
    if ((array === null) || (array.length === 0)) {
        return 0;
    }

    else {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                result += array[i]; 
            }
        }
        return result;
    }


}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.strictEqual(sum([]), 0);
assert.strictEqual(sum(null), 0);
assert.strictEqual(sum([1]), 1);
assert.strictEqual(sum([2]), 0);
assert.strictEqual(sum([1, 2, 3]), 4);
assert.strictEqual(sum([-3, 3]), 0);
// End of tests
