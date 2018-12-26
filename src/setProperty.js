"use strict";

// Third Party
const curryN = require("lodash/fp/curryN");
const set = require("lodash/fp/set");

/**
 * Sets the value at the path of an object.
 *
 * @function setProperty
 * @param {*} value - Value to set on the object.
 * @param {Object} object - Object on which to set.
 * @param {String} path - Object path.
 * @return {Object} Object with the value set at the path.
 * @example <caption>Set property on an object</caption>
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * _.setProperty(4, object, 'a[0].b.c');
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.setProperty(5, object, ['x', '0', 'y', 'z']);
 * console.log(object.x[0].y.z);
 * // => 5
 */
// 0: path, 1: value, 2: object
/* eslint-disable-next-line no-magic-numbers */
module.exports = curryN(3, (value, object, path) => set(path, value, object));
