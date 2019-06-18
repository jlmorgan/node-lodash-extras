"use strict";

// Third Party
const curry = require("lodash/fp/curry");

/**
 * Invokes with a value on a {@code function}.
 *
 * @param {*} value - A value.
 * @param {Function} morphism - A function.
 * @return {*}
 * @example <caption>Invoking with a value</caption>
 * _([_.add(1), _.add(2), _.add(3)])
 *   .map(_.invokeWith(1))
 *   .value();
 * // => [2, 3, 4]
 */
function invokeWith(value, morphism) {
  return morphism(value);
}

module.exports = curry(invokeWith);
