const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns 'the only one' for ['the only one']", () => {
    assert.strictEqual(tail(['the only one']), 'the only one');
  });
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Labs');
  });
});
