"use strict";

// Third Party
const F = require("lodash/fp");

// Project
const invokeWith = require("./invokeWith");
const isFalse = require("./isFalse");

/**
 * Determines whether or not the {@code value} passes all {@code predicates}.
 *
 * @param {Function[]} predicates - An array of predicates.
 * @param {*} value - Value to apply to each predicate.
 * @return {Boolean}
 * @example <caption>All pass</caption>
 * _.isAll([
 *   value => value > 0,
 *   value => value % 2 === 1,
 *   value => value < 10
 * ], 1);
 * // => true
 *
 * @example <caption>One fails</caption>
 * _.isAll([
 *   value => value > 0,
 *   value => value % 2 === 1,
 *   value => value < 10
 * ], -1);
 * // => false
 */
function isAll(predicates, value) {
  return F(predicates || [])
    .map(invokeWith(value))
    .find(isFalse) !== false;
}

module.exports = F.curry(isAll);
