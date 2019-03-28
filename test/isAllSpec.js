"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { isAll } = require("..");

/* eslint-disable max-lines-per-function */
describe("isAll", () => {
  it("empty predicates returns true", () => {
    const testPredicates = [];
    const testValue = 1;

    expect(isAll(testPredicates)(testValue)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it("null predicates returns true", () => {
    const testPredicates = null;
    const testValue = 1;

    expect(isAll(testPredicates)(testValue)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it("passing all predicates returns true", () => {
    /* eslint-disable no-magic-numbers */
    const testPredicates = [
      value => value > 0,
      value => value % 2 === 1,
      value => value < 10
    ];
    const testValue = 1;

    expect(isAll(testPredicates)(testValue)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it("failing any predicate returns false", () => {
    /* eslint-disable no-magic-numbers */
    const testPredicates = [
      value => value > 0,
      value => value % 2 === 1,
      value => value < 10
    ];
    const testValue = -1;

    expect(isAll(testPredicates)(testValue)).to.be.false; // eslint-disable-line no-unused-expressions
  });
});
