"use strict";

// Third Party
const F = require("lodash/fp");

// Project
const invokeWith = require("./invokeWith");
const isTrue = require("./isTrue");

/**
 * Determines whether or not the {@code value} passes any {@code predicates}.
 *
 * @param {Function[]} predicates - An array of predicates.
 * @param {*} value - Value to apply to each predicate.
 * @return {Boolean}
 * @example <caption>All fail</caption>
 * _.isAny([
 *   value => value < 0,
 *   value => value % 2 === 1,
 *   value => value < 10
 * ], 12);
 * // => false
 *
 * @example <caption>One passes</caption>
 * _.isAny([
 *   value => value < 0,
 *   value => value % 2 === 1,
 *   value => value < 10
 * ], 11);
 * // => true
 */
function isAny(predicates, value) {
  return !F.isEmpty(predicates) && F(predicates)
    .map(invokeWith(value))
    .find(isTrue) === true;
}

module.exports = F.curry(isAny);
