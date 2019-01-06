"use strict";

// Third Party
const curry = require("lodash/fp/curry");

/**
 * Provides curried implementation of the {@code typeof} operator.
 *
 * @param {String} type - String name of the expected type.
 * @param {*} operand - Value to determine the type.
 * @return {Boolean} True if the type of the {@code operand} matches the {@code type}; otherwise, false.
 * @example <caption>Truth table</caption>
 */
function isTypeOf(type, operand) {
  return typeof operand === type;
}

module.exports = curry(isTypeOf);
