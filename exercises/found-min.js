/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO your code:

const min = (array) => {
  if ((array === null) || (array.length === 0)) {
    return null;
  }
  else {
    let result = array[0];
    for (let i = 0; i < array.length; i++)

      if (array[i] < result) {
          result = array[i]
    }
    return result
  }
}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 1);
assert.strictEqual(
  min.toString().includes("Math.min"),
  false,
  "don't use Math.min()"
);
assert.strictEqual(min([]), null);
assert.strictEqual(min(null), null);
assert.strictEqual(min([0]), 0);
assert.strictEqual(min([1]), 1);
assert.strictEqual(min([-1]), -1);
assert.strictEqual(min([0, -1, 1]), -1);
assert.strictEqual(min([-2, -1, -3]), -3);
assert.strictEqual(min([2, 1, 3]), 1);
// End of tests
