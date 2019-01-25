"use strict";

// Third Party
const curryN = require("lodash/fp/curryN");

// Constants
const ARGUMENTS_LENGTH = 4;

/**
 * Using the provided {@code value}, invokes the {@code predicate}. If the result of the {@code predicate} returns
 * {@code true}, then invokes the {@code ifTrue} function with the {@code value}; otherwise, invokes the {@code ifFalse}
 * function with the {@code value}.
 *
 * @param {Function} predicate - A predicate evaluating with the provided {@code value}.
 * @param {Function} ifTrue - Function to invoke with the provided {@code value} if the {@code predicate} returns
 * {@code true}.
 * @param {Function} ifFalse - Function to invoke with the provided {@code value} if the {@code predicate} returns
 * {@code false}.
 * @param {*} value - Value to pass into the {@code predicate} and the corresponding {@code ifTrue} or {@code ifFalse}
 * functions.
 * @return {*} Result of {@code value} applied to {@code ifTrue} or {@code ifFalse}.
 * @example <caption>If true</caption>
 * _([0, 1, 2, 3])
 *   .map(_.ifThenElse(
 *     value => value % 2,
 *     value => "even",
 *     value => "odd"
 *   ))
 *   .value();
 * // => ["even", "odd", "even", "odd"]
 * @example <caption>If false</caption>
 * Promise.resolve(httpResponse) // 404 Not Found
 *   .then(_.ifThenElse(
 *     _.pipe(_.get("statusCode"), _.inRange(400, 600)),
 *     _.get("body"),
 *     _.pipe(_.get("statusMessage"), Promise.reject)
 *   ));
 * // => Reject("Not Found")
 */
function ifThenElse(predicate, ifTrue, ifFalse, value) {
  return predicate(value) ? ifTrue(value) : ifFalse(value);
}

module.exports = curryN(ARGUMENTS_LENGTH, ifThenElse);
