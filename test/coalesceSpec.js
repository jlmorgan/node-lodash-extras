"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const coalesce = require("../src/coalesce");

// Test
const params = require("./resources/coalesceParams");

describe("coalesce", () => {
  eachParam(
    /* eslint-disable-next-line no-template-curly-in-string */
    "${value.message}",
    params,
    testValues => expect(coalesce(testValues.alternative)(testValues.initial))
      .to.eql(testValues.expected)
  );
});
