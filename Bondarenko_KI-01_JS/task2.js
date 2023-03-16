const assert = require("assert");
const test = require("./testFunction");

function first_non_repeating_letter(str) {
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr.indexOf(lowerStr[i]) === lowerStr.lastIndexOf(lowerStr[i])) {
      return str[i];
    }
  }

  return "";
}

test("stress", "t", assert.strictEqual, first_non_repeating_letter);
test("sTreSS", "T", assert.strictEqual, first_non_repeating_letter);
test("aaabbb", "", assert.strictEqual, first_non_repeating_letter);
