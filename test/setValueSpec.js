"use strict";

// Third Party
const { expect } = require("chai");
const set = require("lodash/fp/set");

// Project
const setValue = require("../src/setValue");

describe("setValue", () => {
  it("should equal lodash.set", () => {
    const testObject = {};
    const testPath = "a";
    const testValue = true;
    const expectedResult = set(testPath, testValue, testObject);
    const actualResult = setValue(testPath)(testObject)(testValue);

    expect(actualResult).to.eql(expectedResult);
  });
});
