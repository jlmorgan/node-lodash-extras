"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isFalse } = require("..");

// Test
const params = require("./resources/isFalseParams");

describe("isFalse", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isFalse(testValues.value))
      .to.equal(testValues.expected)
  );
});
