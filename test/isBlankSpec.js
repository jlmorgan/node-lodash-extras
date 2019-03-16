"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { isBlank } = require("..");

describe("isBlank", () => {
  it("null returns true", () => {
    const testString = null;

    expect(isBlank(testString)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it("empty (\"\") returns true", () => {
    const testString = "";

    expect(isBlank(testString)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it("white-space (\" \") returns true", () => {
    const testString = " ";

    expect(isBlank(testString)).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it("non-white-space return false", () => {
    const testString = "a";

    expect(isBlank(testString)).to.be.false; // eslint-disable-line no-unused-expressions
  });
});
