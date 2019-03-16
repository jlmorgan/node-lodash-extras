"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { ifThenElse } = require("..");

describe("ifThenElse", () => {
  const testPredicate = value => value === 0;
  const testIfTrue = value => value + 1;
  const testIfFalse = value => value - 1;

  it("should invoke ifTrue for predicate returning true", () => {
    const testValue = 0;
    const expectedResult = 1;
    const actualResult = ifThenElse(testPredicate)(testIfTrue)(testIfFalse)(testValue);

    expect(actualResult).to.equal(expectedResult);
  });

  it("should invoke ifFalse for predicate returning false", () => {
    const testValue = 2;
    const expectedResult = 1;
    const actualResult = ifThenElse(testPredicate)(testIfTrue)(testIfFalse)(testValue);

    expect(actualResult).to.equal(expectedResult);
  });
});
