"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isNothing } = require("..");

// Test
const params = require("./resources/isNothingParams");

describe("isNothing", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isNothing(testValues.value))
      .to.equal(testValues.expected)
  );
});
