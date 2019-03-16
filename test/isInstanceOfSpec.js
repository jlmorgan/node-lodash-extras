"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isInstanceOf } = require("..");

// Test
const params = require("./resources/isInstanceOfParams");

describe("isInstanceOf", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isInstanceOf(testValues.constructor)(testValues.value))
      .to.equal(testValues.expected)
  );
});
