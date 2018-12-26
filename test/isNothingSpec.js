"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const isNothing = require("../src/isNothing");

// Test
const params = require("./resources/isNothingParams");

describe("isNothing", () => {
  eachParam(
    /* eslint-disable-next-line no-template-curly-in-string */
    "${value.message}",
    params,
    testValues => expect(isNothing(testValues.value))
      .to.equal(testValues.expected)
  );
});
