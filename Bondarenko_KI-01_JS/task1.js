const assert = require("assert");
const test = require("./testFunction");

function filterStrings(list) {
  return list.filter((element) => typeof element === "number");
}

test([1, 2, "a", "b"], [1, 2], assert.deepStrictEqual, filterStrings);
test([1, "a", "b", 0, 15], [1, 0, 15], assert.deepStrictEqual, filterStrings);
test([1, 2, "aasf", "1", "123", 123], [1, 2, 123], assert.deepStrictEqual, filterStrings);
