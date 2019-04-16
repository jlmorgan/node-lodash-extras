"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { isAny } = require("..");

/* eslint-disable max-lines-per-function */
describe("isAny", () => {
  it("empty predicates returns false", () => {
    const testPredicates = [];
    const testValue = 1;

    expect(isAny(testPredicates)(testValue)).to.be.false; // eslint-disable-line no-unused-expressions
  });

  it("null predicates returns false", () => {
    const testPredicates = null;
    const testValue = 1;

    expect(isAny(testPredicates)(testValue)).to.be.false; // eslint-disable-line no-unused-expressions
  });

  it("failing all predicates returns false", () => {
    /* eslint-disable no-magic-numbers */
    const testPredicates = [
      value => value < 0,
      value => value % 2 === 1,
      value => value < 10
    ];
    const testValue = 12;

    expect(isAny(testPredicates)(testValue)).to.be.false; // eslint-disable-line no-unused-expressions
  });

  it("passing any predicate returns true", () => {
    /* eslint-disable no-magic-numbers */
    const testPredicates = [
      value => value < 0,
      value => value % 2 === 1,
      value => value < 1
    ];
    const testValue = 11;

    expect(isAny(testPredicates)(testValue)).to.be.true; // eslint-disable-line no-unused-expressions
  });
});
