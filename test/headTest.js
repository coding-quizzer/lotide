const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'fairy' for ['fairy', 'time', 'stories']", () => {
    assert.strictEqual(head(['fairy', 'time', 'stories']), 'fairy');
  });

  it("returns 4 for [4]", () => {
    assert.strictEqual(head([4]), 4);
  })

  it ("returns undefined for an empty array", () => {
    assert.isUndefined(head([]));
  });
});