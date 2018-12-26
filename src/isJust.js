"use strict";

// Project
const isNothing = require("./isNothing");

/**
 * Determines whether or not the {@code value} is just a value.
 *
 * @param {*} [value] - Value to test.
 * @return {Boolean} True if the value is not {@code null} or {@code undefined}; otherwise, false.
 * @example <caption>Value is {@code Nothing} (e.g., {@code undefined} or {@code null})</caption>
 * _.isJust() // undefined
 * // => false
 *
 * _.isJust(null)
 * // => false
 *
 * @example <caption>Value is {@code Just}</caption>
 * _.isJust(0)
 * // => true
 *
 * _.isJust(false)
 * // => true
 *
 * _.isJust("")
 * // => true
 *
 * _.isJust([])
 * // => true
 *
 * _.isJust({})
 * // => true
 */
function isJust(value) {
  return !isNothing(value);
}

module.exports = isJust;
