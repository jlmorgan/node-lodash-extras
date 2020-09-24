"use strict";

// Third Party
const curry = require("lodash/fp/curry");
const isString = require("lodash/fp/isString");

/**
 * Flip of {@link append}.
 *
 * @function prepend
 * @param {String} prependix - The prependix string.
 * @param {String} initial - The initial string.
 * @return {String} The prepended string.
 * @example <caption>Prepend string</caption>
 * prepend("b", "a");
 * // => "ba"
 */
function prepend(prependix, initial) {
  let result = "";

  if (isString(initial)) {
    if (isString(prependix)) {
      result = prependix + initial;
    } else {
      throw new TypeError(`'prependix' value must be a String; found ${typeof prependix}`);
    }
  } else {
    throw new TypeError(`'initial' value must be a String; found ${typeof initial}`);
  }

  return result;
}

module.exports = curry(prepend);
