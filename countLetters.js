const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(str) {
  let letters = str.toLowerCase();
  const result = {};

  for (const letter of letters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = countLetters;

let result1 = countLetters('Lighthouse in the house');

assertEqual(result1['l'], 1);
assertEqual(result1['z'], undefined);
assertEqual(result1['o'], 2);
assertEqual(result1['y'], undefined);

