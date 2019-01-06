"use strict";

// Third Party
const curry = require("lodash/fp/curry");

/**
 * Determimes the modulus of the {@code dividend} {@code modulo} {@code divisor} (e.g., {@code 1 % 2 = 1}).
 *
 * @param {Number} divisor - The divisor number.
 * @param {Number} dividend - The dividend number.
 * @return {Number} The modulus.
 * @example <caption>Equivalence</caption>
 * _.modulo(2, 1) === 1 % 2
 * // => true
 */
function modulo(divisor, dividend) {
  return dividend % divisor;
}

module.exports = curry(modulo);
