const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (object1[keys1] !== object2[keys1]) {
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
  drivers: 'Charles Lecler'
};

const alfaRomeoF1 = {
  color: 'red',
  engine: 'ferrari',
  drivers: 'Guanyu Zhou'
}

assertEqual(eqObjects(ferrariF1, alfaRomeoF1), false);