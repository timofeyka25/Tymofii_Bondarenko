const test = (input, expected, assertFunction, testFunction) => {
  let actual = testFunction(input);
  let message = `Test Case Failed:
    Input: ${input}
    Expected Output: ${expected}
    Actual Output: ${actual}`;
  try {
    assertFunction(actual, expected, message);
    console.log("Test Passed");
  } catch {
    console.error(message);
  }
};

module.exports = test;
