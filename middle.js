const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const middle = function(arr) {
  let middleIndex = (arr.length - 1) / 2;
  let mid = [];

  if (Number.isInteger(middleIndex)) {
    mid.push(arr[middleIndex])
  } else {
    mid.push(arr[Math.floor(middleIndex)]);
    mid.push(arr[Math.ceil(middleIndex)]);
  }

  return mid;
}

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['apple', 'banana', 'pear', 'orange']), ['banana', 'pear']);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);