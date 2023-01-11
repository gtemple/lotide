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


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const triples = [5, 4, 5, 2, 2];
const results2 = map(triples, triple => triple * 3);
assertArraysEqual(results2, [15, 12, 15, 6, 6])

const cars = ['Ferrari', 'Porsche', 'Aston Martin'];
const results3 = map(cars, car => car.length);
assertArraysEqual(results3, [7, 7, 12])

const pigLatin = ['Ferrari', 'Porsche', 'Aston Martin'];
const results4 = map(pigLatin, word => word.slice(1) + word[0] + 'ay');
assertArraysEqual(results4, ['errariFay', 'orschePay', 'ston MartinAay'])