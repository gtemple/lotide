const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  const successMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;


  if (keys1.length !== keys2.length) {
    console.log(failMessage)
    return false
  };

  for (let i = 0; i < keys1.length; i++) {
    if (Array.isArray(actual[keys1[i]])) {
      if (!eqArrays(actual[keys1[i]], expected[keys1[i]])) {
        console.log(failMessage)
        return false
      };
    } else if (actual[keys1[i]] !== expected[keys1[i]]) {
      console.log(failMessage)
      return false;
    }
  }
  console.log(successMessage);
};

const mclarenF1 = {
  color: "orange",
  engine: "mercedes",
  drivers: "Lando Norris",
};

const mclarenOtherF1 = {
  color: "orange",
  engine: "mercedes",
  drivers: "Lando Norris"
};

const ferrariF1 = {
  color: 'red',
  engine: 'ferrari',
  drivers: 'Charles Leclerc'
};

const alfaRomeoF1 = {
  color: 'red',
  engine: 'ferrari',
  drivers: 'Guanyu Zhou'
};

assertObjectsEqual(mclarenF1, mclarenOtherF1);
assertObjectsEqual(ferrariF1, alfaRomeoF1);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject)