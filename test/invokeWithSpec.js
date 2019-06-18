"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { invokeWith } = require("..");

/* eslint-disable max-lines-per-function */
describe("invokeWith", () => {
  it("should invoke the function with the value", () => {
    const testA = 4;
    const testB = 2;
    const testFunctions = [
      a => b => a + b,
      a => b => a - b,
      a => b => a * b,
      a => b => a / b
    ];
    const expectedResult = [
      testA + testB,
      testA - testB,
      testA * testB,
      testA / testB
    ];
    const actualResult = testFunctions
      .map(invokeWith(testA))
      .map(invokeWith(testB));

    expect(actualResult).to.eql(expectedResult);
  });
});
