"use strict";

// Project
const isNone = require("./isNone");

/**
 * Determines whether or not the {@code value} is just a value.
 *
 * @param {*} [value] - Value to test.
 * @return {Boolean} True if the value is not {@code null} or {@code undefined}; otherwise, false.
 * @example <caption>Value is {@code Nothing} (e.g., {@code undefined} or {@code null})</caption>
 * _.isSome() // undefined
 * // => false
 *
 * _.isSome(null)
 * // => false
 *
 * @example <caption>Value is {@code Just}</caption>
 * _.isSome(0)
 * // => true
 *
 * _.isSome(false)
 * // => true
 *
 * _.isSome("")
 * // => true
 *
 * _.isSome([])
 * // => true
 *
 * _.isSome({})
 * // => true
 */
function isSome(value) {
  return !isNone(value);
}

module.exports = isSome;
