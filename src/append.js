"use strict";

// Third Party
const curry = require("lodash/fp/curry");
const isString = require("lodash/fp/isString");

/**
 * Append the {@code appendix} string to the {@code initial} string.
 *
 * @param {String} appendix - The appendix string.
 * @param {String} initial - The initial string.
 * @return {String} The appended string.
 * @example <caption>Append strings</caption>
 * _.append("b", "a");
 * // => "ab"
 */
function append(appendix, initial) {
  let result = "";

  if (isString(initial)) {
    if (isString(appendix)) {
      result = initial + appendix;
    } else {
      throw new TypeError(`'appendix' value must be a String; found ${typeof appendix}`);
    }
  } else {
    throw new TypeError(`'initial' value must be a String; found ${typeof initial}`);
  }

  return result;
}

module.exports = curry(append);
