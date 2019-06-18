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
 * _.isNone()
 * // => true
 *
 * _.isNone(null)
 * // => true
 *
 * @example <caption>Value is {@code Just}</caption>
 * _.isNone(0)
 * // => false
 *
 * _.isNone(false)
 * // => false
 *
 * _.isNone("")
 * // => false
 *
 * _.isNone([])
 * // => false
 *
 * _.isNone({})
 * // => false
 */
function isNone(value) {
  return isUndefined(value) || isNull(value);
}

module.exports = isNone;
