let without = function(source, itemsToRemove) {
  let result = [];
  let flag = true;

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        flag = false;
      }
    }
    if (flag) {
      result.push(source[i]);
    }
    flag = true;
  }
  return result;
}

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);


const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
console.log(words)