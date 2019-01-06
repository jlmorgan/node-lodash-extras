"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const isTypeOf = require("../src/isTypeOf");

// Test
const params = require("./resources/isTypeOfParams");

describe("isTypeOf", () => {
  eachParam(
    /* eslint-disable-next-line no-template-curly-in-string */
    "${value.message}",
    params,
    testValues => expect(isTypeOf(testValues.type)(testValues.value))
      .to.equal(testValues.expected)
  );
});
