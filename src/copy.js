"use strict";

// Third Party
const curryN = require("lodash/fp/curryN");
const get = require("lodash/fp/get");
const set = require("lodash/fp/set");

// Constants
const ARGUMENTS_LENGTH = 3;

/**
 * Copies an object path from the {@code source} object to the {@code destination} object.
 *
 * @private
 * @param {Object} source - Source object.
 * @param {Object} destination - Destination object.
 * @param {String} objectPath - Object path.
 * @return {Object}
 * @example <caption>Copying</caption>
 * _.copy({ "a": 1 }, { "b": 2}, "a");
 * // => { "a": 1, "b": 2 }
 *
 */
function copy(source, destination, objectPath) {
  return set(objectPath, get(objectPath, source), destination);
}

module.exports = curryN(ARGUMENTS_LENGTH, copy);
