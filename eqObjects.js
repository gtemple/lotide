const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (Array.isArray(object1[keys1[i]])) {
      if (!eqArrays(object1[keys1[i]], object2[keys1[i]])) return false;
    } else if (object1[keys1[i]] !== object2[keys1[i]]) {
      return false;
    }
  }
  
  return true;
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

assertEqual(eqObjects(mclarenF1, mclarenOtherF1), true);

const ferrariF1 = {
  color: 'red',
  engine: 'ferrari',
  drivers: 'Charles Leclerc'
};

const alfaRomeoF1 = {
  color: 'red',
  engine: 'ferrari',
  drivers: 'Guanyu Zhou'
}

assertEqual(eqObjects(ferrariF1, alfaRomeoF1), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

console.log(typeof multiColorShirtObject.colors)
