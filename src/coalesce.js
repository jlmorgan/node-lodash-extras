"use strict";

// Third Party
const curry = require("lodash/fp/curry");

// Project
const isNothing = require("./isNothing");

/**
 * Coalesces if the value is {@code Nothing} with an alternative value. The default of {@code value || alternative} is a
 * _falsey_ coalesce and not a {@code Nothing} coalesce.
 *
 * @function coalesce
 * @alias alt
 * @param {*} alternative - Value to use if value was null or undefined.
 * @param {*} value - The value value.
 * @return {*} The alternative value if value is {@code Nothing}; otherwise, the value value.
 * @example <caption>Value is falsey</caption>
 * _.coalesce(false, 0);
 * // => 0
 *
 * _.coalesce(false, "");
 * // => ""
 *
 * _.coalesce(true, false);
 * // => false
 *
 * @example <caption>Value is {@code Nothing} (e.g., {@code undefined} or {@code null})</caption>
 * _.coalesce(false)(); // Passing the second argument as undefined
 * // => false
 *
 * _.coalesce(1, null);
 * // => 1
 *
 * @example <caption>Value is {@code Just}</caption>
 * _.coalesce(1, 2);
 * // => 2
 */
function coalesce(alternative, value) {
  return isNothing(value) ? alternative : value;
}

module.exports = curry(coalesce);
