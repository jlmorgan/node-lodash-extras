"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { copy } = require("..");

describe("copy", () => {
  it("should be equivalent to modulo operator", () => {
    const testSource = {
      "a": 1
    };
    const testDestination = {
      "b": 2
    };
    const testPath = "a";
    const expectedResult = {
      "a": 1,
      "b": 2
    };
    const actualResult = copy(testSource)(testDestination)(testPath);

    expect(actualResult).to.eql(expectedResult);
  });
});
