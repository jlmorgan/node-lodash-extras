"use strict";

// Third Party
const F = require("lodash/fp");

// Project
const alt = require("./src/alt");
const append = require("./src/append");
const coalesce = require("./src/coalesce");
const isBlank = require("./src/isBlank");
const isJust = require("./src/isJust");
const isNothing = require("./src/isNothing");
const prepend = require("./src/prepend");
const setProperty = require("./src/setProperty");
const setValue = require("./src/setValue");

module.exports = F.runInContext().mixin({
  alt,
  append,
  coalesce,
  isBlank,
  isJust,
  isNothing,
  prepend,
  setProperty,
  setValue
});
