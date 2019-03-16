"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isTypeOf } = require("..");

// Test
const params = require("./resources/isTypeOfParams");

describe("isTypeOf", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isTypeOf(testValues.type)(testValues.value))
      .to.equal(testValues.expected)
  );
});
