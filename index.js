"use strict";

// Third Party
const F = require("lodash/fp");

// Project
const alt = require("./src/alt");
const append = require("./src/append");
const coalesce = require("./src/coalesce");
const copy = require("./src/copy");
const ifThenElse = require("./src/ifThenElse");
const invokeWith = require("./src/invokeWith");
const isBlank = require("./src/isBlank");
const isJust = require("./src/isJust");
const isInstanceOf = require("./src/isInstanceOf");
const isNothing = require("./src/isNothing");
const isTypeOf = require("./src/isTypeOf");
const modulo = require("./src/modulo");
const prepend = require("./src/prepend");
const setProperty = require("./src/setProperty");
const setValue = require("./src/setValue");

module.exports = F.runInContext().mixin({
  alt,
  append,
  coalesce,
  copy,
  ifThenElse,
  invokeWith,
  isBlank,
  isInstanceOf,
  isJust,
  isNothing,
  isTypeOf,
  modulo,
  prepend,
  setProperty,
  setValue
});
