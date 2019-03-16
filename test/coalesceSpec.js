"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { coalesce } = require("..");

// Test
const params = require("./resources/coalesceParams");

describe("coalesce", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(coalesce(testValues.alternative)(testValues.initial))
      .to.eql(testValues.expected)
  );
});
