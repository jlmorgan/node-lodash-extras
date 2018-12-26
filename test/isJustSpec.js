"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const isJust = require("../src/isJust");

// Test
const params = require("./resources/isJustParams");

describe("isJust", () => {
  eachParam(
    /* eslint-disable-next-line no-template-curly-in-string */
    "${value.message}",
    params,
    testValues => expect(isJust(testValues.value))
      .to.equal(testValues.expected)
  );
});
