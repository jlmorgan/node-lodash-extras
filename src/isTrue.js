"use strict";

/**
 * Determines whether or not the {@code value} is {@code true}.
 *
 * @param {*} [value] - Value to test.
 * @return {Boolean} True if the value is explicitly {@code true}; otherwise, false.
 * @example <caption>Value is Truthy</caption>
 * _.isTrue(1)
 * // => false
 *
 * _.isTrue("a")
 * // => false
 *
 * _.isTrue([1])
 * // => false
 *
 * _.isTrue({ a: 1 })
 * // => false
 *
 * _.isTrue(true)
 * // => true
 */
function isTrue(value) {
  return value === true;
}

module.exports = isTrue;
