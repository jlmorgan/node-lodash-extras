"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isTrue } = require("..");

// Test
const params = require("./resources/isTrueParams");

describe("isTrue", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isTrue(testValues.value))
      .to.equal(testValues.expected)
  );
});
