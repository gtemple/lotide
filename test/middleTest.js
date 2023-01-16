const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['apple', 'banana', 'pear', 'orange']), ['banana', 'pear']);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);