"use strict";

// Third Party
const flip = require("lodash/fp/flip");

// Project
const append = require("./append");

/**
 * Flip of {@link append}.
 *
 * @function prepend
 * @param {String} initial - The initial string.
 * @param {String} appendix - The appendix string.
 * @return {String} The prepended string.
 * @example <caption>Prepend string</caption>
 * prepend("b", "a");
 * // => "ba"
 */
module.exports = flip(append);
