"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isSome } = require("..");

// Test
const params = require("./resources/isSomeParams");

describe("isSome", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isSome(testValues.value))
      .to.equal(testValues.expected)
  );
});
