"use strict";

// Third Party
const curryN = require("lodash/fp/curryN");
const set = require("lodash/fp/set");

/**
 * Sets the value at the path of an object.
 *
 * @function setValue
 * @param {String} path - Object path.
 * @param {Object} object - Object on which to set.
 * @param {*} value - Value to set on the object.
 * @return {Object} Object with the value set at the path.
 * @example <caption>Set value on an object</caption>
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * _.setValue('a[0].b.c', object, 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.setValue(['x', '0', 'y', 'z'], object, 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
/* eslint-disable no-magic-numbers */
module.exports = curryN(3, (path, object, value) => set(path, value, object));
