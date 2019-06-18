"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isNone } = require("..");

// Test
const params = require("./resources/isNoneParams");

describe("isNone", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isNone(testValues.value))
      .to.equal(testValues.expected)
  );
});
