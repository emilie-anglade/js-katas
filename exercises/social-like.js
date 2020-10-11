/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO your code:

const getLikes = (array) => {
  if (array.length === 0) {
    return "Be the first to like this"
  }

  else if(array.length === 1) {
    return `${array[0]} likes this`
  }

  else if(array.length === 2) {
    return `${array[0]} and ${array[1]} like this`
  }

  else {
    return `${array[0]} and ${array.length - 1} other people like this`
  }
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof getLikes, "function");
assert.strictEqual(getLikes.length, 1);
assert.strictEqual(getLikes([]), "Be the first to like this");
assert.strictEqual(getLikes(["Cartman"]), "Cartman likes this");
assert.strictEqual(getLikes(["Bart"]), "Bart likes this");
assert.strictEqual(
  getLikes(["Kenny", "Cartman"]),
  "Kenny and Cartman like this"
);
assert.strictEqual(getLikes(["Bart", "Lisa"]), "Bart and Lisa like this");
assert.strictEqual(
  getLikes(["Stan", "Kyle", "Kenny", "Cartman"]),
  "Stan and 3 other people like this"
);
assert.strictEqual(
  getLikes(["Homer", "Marge", "Bart", "Lisa", "Maggie"]),
  "Homer and 4 other people like this"
);
// End of tests
