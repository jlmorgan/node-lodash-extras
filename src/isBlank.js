"use strict";

// Third Party
const isEmpty = require("lodash/fp/isEmpty");
const pipe = require("lodash/fp/pipe");
const trim = require("lodash/fp/trim");

/**
 * Determines whether or not a string is blank.
 *
 * @function isBlank
 * @param {String} value - String to evaluate.
 * @return {Boolean} True if the value is blank; otherwise, false.
 * @example <caption>Value is blank</caption>
 * _.isBlank() // undefined
 * // => true
 *
 * _.isBlank(null)
 * // => true
 *
 * _.isBlank("")
 * // => true
 *
 * _.isBlank(" ")
 * // => true
 *
 * @example <caption>Value contains white space</caption>
 * _.isBlank(" a ")
 * // => false
 */
module.exports = pipe(trim, isEmpty);
