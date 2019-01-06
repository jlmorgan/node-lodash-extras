"use strict";

// Third Party
const { expect } = require("chai");

// Project
const modulo = require("../src/modulo");

describe("modulo", () => {
  it("should be equivalent to modulo operator", () => {
    /* eslint-disable no-magic-numbers */
    const testDivisor = 2;
    const testDividend = 1;
    const expectedResult = testDividend % testDivisor;
    const actualResult = modulo(testDivisor)(testDividend);

    expect(actualResult).to.equal(expectedResult);
  });
});
