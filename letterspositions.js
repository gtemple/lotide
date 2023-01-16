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

const letterPositions = function(sentence) {
  let letters = sentence.toLowerCase();
  const result = {};

  for (let i = 0; i < letters.length; i++) {
    if (result[letters[i]]) {
      result[letters[i]].push(i);
    } else if (letters[i] === ' ') {
      false;
    } else {
      result[letters[i]] = [i];
    }
  }

  return result;
};

module.exports = letterPositions;

let result1 = letterPositions('Lighthouse in the house');

assertArraysEqual(result1['l'], [0]);
assertArraysEqual(result1['e'], [9, 16, 22]);
assertArraysEqual(result1['s'], [8, 21]);