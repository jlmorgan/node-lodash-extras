"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { tryCatch } = require("..");

/* eslint-disable max-lines-per-function, require-jsdoc */
describe("tryCatch", () => {
  it("should return supplied value for safe invocation", () => {
    const testCatchFunction = () => 0;
    const testSafeTrySupplier = () => 1;
    const expectedResult = 1;
    const actualResult = tryCatch(testCatchFunction, testSafeTrySupplier);

    expect(actualResult).to.eql(expectedResult);
  });

  it("should return result of catchFunction for unsafe invocation", () => {
    const testError = new Error();

    function testUnSafeTrySupplier() {
      throw testError;
    }

    const testCatchFunction = error => error;
    const expectedResult = testError;
    const actualResult = tryCatch(testCatchFunction, testUnSafeTrySupplier);

    expect(actualResult).to.eql(expectedResult);
  });
});
