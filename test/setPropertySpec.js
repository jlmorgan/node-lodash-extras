"use strict";

// Third Party
const { expect } = require("chai");
const set = require("lodash/fp/set");

// Project
const setProperty = require("../src/setProperty");

describe("setProperty", () => {
  it("should equal lodash.set", () => {
    const testObject = {};
    const testPath = "a";
    const testValue = true;
    const expectedResult = set(testPath, testValue, testObject);
    const actualResult = setProperty(testValue)(testObject)(testPath);

    expect(actualResult).to.eql(expectedResult);
  });
});
