"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { isJust } = require("..");

// Test
const params = require("./resources/isJustParams");

describe("isJust", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(isJust(testValues.value))
      .to.equal(testValues.expected)
  );
});
