"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { or } = require("..");

// Test
const params = require("./resources/orParams");

describe("or", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(or(testValues.leftDisjunct)(testValues.rightDisjunct))
      .to.equal(testValues.expected)
  );
});
