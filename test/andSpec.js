"use strict";

// Third Party
const { expect } = require("chai");
const eachParam = require("mocha-param");

// Project
const { and } = require("..");

// Test
const params = require("./resources/andParams");

describe("and", () => {
  eachParam(
    "${value.message}", // eslint-disable-line no-template-curly-in-string
    params,
    testValues => expect(and(testValues.leftConjunct)(testValues.rightConjunct))
      .to.equal(testValues.expected)
  );
});
