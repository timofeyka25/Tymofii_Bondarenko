const assert = require("assert");
const test = require("./testFunction");

function nextBigger(num) {
  let digits = num.toString().split("");
  let i = digits.length - 1;

  while (i > 0 && digits[i] <= digits[i - 1]) {
    i--;
  }

  if (i === 0) {
    return -1;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i - 1]) {
    j--;
  }

  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  let sortedSuffix = digits.slice(i).sort();

  return parseInt(digits.slice(0, i).concat(sortedSuffix).join(""));
}

test(12, 21, assert.strictEqual, nextBigger);
test(513, 531, assert.strictEqual, nextBigger);
test(2017, 2071, assert.strictEqual, nextBigger);
test(9, -1, assert.strictEqual, nextBigger);
test(111, -1, assert.strictEqual, nextBigger);
test(531, -1, assert.strictEqual, nextBigger);
test(123, 132, assert.strictEqual, nextBigger);
