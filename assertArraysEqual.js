const assertArraysEqual = function(actual, expected) {
  let failure = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  let success = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let result = true;

  if (actual.length !== expected.length) {
    result = false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      result = false;
    }
  }
  result ? console.log(success) : console.log(failure);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);