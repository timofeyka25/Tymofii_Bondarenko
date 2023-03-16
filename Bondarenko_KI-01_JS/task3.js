const assert = require("assert");
const test = require("./testFunction");

function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return n;
}

test(16, 7, assert.strictEqual, digitalRoot);
test(942, 6, assert.strictEqual, digitalRoot);
test(132189, 6, assert.strictEqual, digitalRoot);
