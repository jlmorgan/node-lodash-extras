"use strict";

// Third Party
const { expect } = require("chai");

// Project
const append = require("../src/append");

describe("append", () => {
  it("'b' appended to 'a' returns 'ab'", () => {
    const testString = "a";
    const testAppendix = "b";
    const expectedResult = "ab";

    expect(append(testAppendix)(testString)).to.equal(expectedResult);
  });

  it("String appended to non-String throws TypeError", () => {
    const testString = 0;
    const testAppendix = "b";
    const testFn = () => append(testAppendix)(testString);

    expect(testFn).to.throw(TypeError);
  });

  it("non-String appended to String throws TypeError", () => {
    const testString = "a";
    const testAppendix = 0;
    const testFn = () => append(testAppendix)(testString);

    expect(testFn).to.throw(TypeError);
  });
});
