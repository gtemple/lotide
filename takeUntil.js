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

// <--------------------------->

const takeUntil = function(array, callback) {
  const results = [];
  for (let i of array) {
    if (callback(i)) {
      return results;
    }
    results.push(i);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = [3, 7, 9, 13, 2, 25];
const results3 = takeUntil(data3, x => x % 2 === 0);
assertArraysEqual(results3, [3, 7, 9, 13]);

const data4 = ['car', 'tree', 'home', 'couch', 'television', 'chair'];
const results4 = takeUntil(data4, x => x.length > 5);
assertArraysEqual(results4, ['car', 'tree', 'home', 'couch']);