"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { prepend } = require("..");

describe("prepend", () => {
  it("'b' prepended to 'a' returns 'ba'", () => {
    const testPrependix = "a";
    const testString = "b";
    const expectedResult = "ba";

    expect(prepend(testPrependix)(testString)).to.equal(expectedResult);
  });

  it("String prepended to non-String throws TypeError", () => {
    const testPrependix = 0;
    const testString = "b";
    const testFn = () => prepend(testPrependix)(testString);

    expect(testFn).to.throw(TypeError);
  });

  it("non-String prepended to String throws TypeError", () => {
    const testPrependix = "a";
    const testString = 0;
    const testFn = () => prepend(testPrependix)(testString);

    expect(testFn).to.throw(TypeError);
  });
});
