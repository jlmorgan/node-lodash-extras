"use strict";

// Third Party
const F = require("lodash/fp");

// Project
const alt = require("./src/alt");
const and = require("./src/and");
const append = require("./src/append");
const coalesce = require("./src/coalesce");
const copy = require("./src/copy");
const ifThenElse = require("./src/ifThenElse");
const invokeWith = require("./src/invokeWith");
const isAll = require("./src/isAll");
const isBlank = require("./src/isBlank");
const isFalse = require("./src/isFalse");
const isJust = require("./src/isJust");
const isInstanceOf = require("./src/isInstanceOf");
const isNothing = require("./src/isNothing");
const isTrue = require("./src/isTrue");
const isTypeOf = require("./src/isTypeOf");
const modulo = require("./src/modulo");
const or = require("./src/or");
const prepend = require("./src/prepend");
const setProperty = require("./src/setProperty");
const setValue = require("./src/setValue");

module.exports = F.runInContext().mixin({
  alt,
  and,
  append,
  coalesce,
  copy,
  ifThenElse,
  invokeWith,
  isAll,
  isBlank,
  isFalse,
  isInstanceOf,
  isJust,
  isNothing,
  isTrue,
  isTypeOf,
  modulo,
  or,
  prepend,
  setProperty,
  setValue
});
