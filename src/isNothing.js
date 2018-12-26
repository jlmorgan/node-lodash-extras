"use strict";

// Third Party
const isNull = require("lodash/fp/isNull");
const isUndefined = require("lodash/fp/isUndefined");

/**
 * Determines whether or not the value is {@code undefined} or {@code null}.
 *
 * @param {*} value - Value to test.
 * @return {Boolean} True if the value is {@code null} or {@code undefined}; otherwise, false.
 * @example <caption>Value is {@code Nothing} (e.g., {@code undefined} or {@code null})</caption>
 * _.isNothing()
 * // => true
 *
 * _.isNothing(null)
 * // => true
 *
 * @example <caption>Value is {@code Just}</caption>
 * _.isNothing(0)
 * // => false
 *
 * _.isNothing(false)
 * // => false
 *
 * _.isNothing("")
 * // => false
 *
 * _.isNothing([])
 * // => false
 *
 * _.isNothing({})
 * // => false
 */
function isNothing(value) {
  return isUndefined(value) || isNull(value);
}

module.exports = isNothing;
