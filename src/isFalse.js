"use strict";

/**
 * Determines whether or not the {@code value} is {@code false}.
 *
 * @param {*} [value] - Value to test.
 * @return {Boolean} True if the value is explicitly {@code false}; otherwise, false.
 * @example <caption>Value is Falsey</caption>
 * _.isFalse() // undefined
 * // => false
 *
 * _.isFalse(null)
 * // => false
 *
 * _.isFalse(0)
 * // => false
 *
 * _.isFalse("")
 * // => false
 *
 * _.isFalse([])
 * // => false
 *
 * _.isFalse({})
 * // => false
 *
 * _.isFalse(false)
 * // => true
 */
function isFalse(value) {
  return value === false;
}

module.exports = isFalse;
