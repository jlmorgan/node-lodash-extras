"use strict";

// Third Party
const curry = require("lodash/fp/curry");
const isFunction = require("lodash/fp/isFunction");

/**
 * Performs the logical conjunction (and) on the {@code left} and {@code right} conjuncts. If the conjuncts are
 * functions, they will be evaluated first before comparing.
 *
 * @param {*} left - Left conjunct.
 * @param {*} right - Right conjunct.
 * @return {Boolean}
 * @example <caption>Function and Function</caption>
 * _.and(() => true, () => false);
 * // => false
 * @example <caption>Value and Value</caption>
 * _.and(true, false);
 * // => false
 * @example <caption>Evaluation chain</caption>
 * const predicates = [
 *   value => value % 2 === 0, // isEven
 *   value => value >= 0, // isPositive
 *   value => value < 10 // isOnes
 * ];
 *
 * const testValue = value => _(predicates)
 *   .map(predicate => predicate(value))
 *   .reduce(_.and, true);
 *
 * testValue(1);
 * // => false
 *
 * testValue(2);
 * // => true
 *
 * testValue(-1);
 * // => false
 *
 * testValue(11);
 * // => false
 */
function and(left, right) {
  return (isFunction(left) ? left() : left) && (isFunction(right) ? right() : right);
}

module.exports = curry(and);
