"use strict";

// Third Party
const curry = require("lodash/fp/curry");
const isFunction = require("lodash/fp/isFunction");

/**
 * Performs the logical disjunction (or) on the {@code left} or {@code right} disjuncts. If the disjuncts are
 * functions, they will be evaluated first before comparing.
 *
 * @param {*} left - Left conjunct.
 * @param {*} right - Right conjunct.
 * @return {Boolean}
 * @example <caption>Function or Function</caption>
 * _.or(() => true, () => false);
 * // => true
 * @example <caption>Value or Value</caption>
 * _.or(false, true);
 * // => true
 * @example <caption>Mixed</caption>
 * _.or(() => true, false);
 * // => true
 *
 * _.or(true, () => false);
 * // => true
 * @example <caption>Evaluation chain</caption>
 * const predicates = [
 *   value => value % 2 === 0, // isEven
 *   value => value >= 0 // isPositive
 * ];
 *
 * const testValue = value => _(predicates)
 *   .map(predicate => predicate(value))
 *   .reduce(_.or, true);
 *
 * testValue(1);
 * // => true
 *
 * testValue(2);
 * // => true
 *
 * testValue(-1);
 * // => false
 *
 * testValue(-2);
 * // => true
 */
function or(left, right) {
  return (isFunction(left) ? left() : left) || (isFunction(right) ? right() : right);
}

module.exports = curry(or);
