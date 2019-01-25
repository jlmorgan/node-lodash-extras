"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const isInstanceOf = require("../src/isInstanceOf");

// Test
const params = require("./resources/isInstanceOfParams");

describe("isInstanceOf", () => {
  eachParam(
    /* eslint-disable-next-line no-template-curly-in-string */
    "${value.message}",
    params,
    testValues => expect(isInstanceOf(testValues.constructor)(testValues.value))
      .to.equal(testValues.expected)
  );
});
