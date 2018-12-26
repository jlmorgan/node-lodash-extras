"use strict";

// Third Party
const { expect } = require("chai");

// Project
const isBlank = require("../src/isBlank");

describe("isBlank", () => {
  it("null returns true", () => {
    const testString = null;

    /* eslint-disable-next-line no-unused-expressions */
    expect(isBlank(testString)).to.be.true;
  });

  it("empty (\"\") returns true", () => {
    const testString = "";

    /* eslint-disable-next-line no-unused-expressions */
    expect(isBlank(testString)).to.be.true;
  });

  it("white-space (\" \") returns true", () => {
    const testString = " ";

    /* eslint-disable-next-line no-unused-expressions */
    expect(isBlank(testString)).to.be.true;
  });

  it("non-white-space return false", () => {
    const testString = "a";

    /* eslint-disable-next-line no-unused-expressions */
    expect(isBlank(testString)).to.be.false;
  });
});
