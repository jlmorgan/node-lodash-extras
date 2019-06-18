"use strict";

// Third Party
const F = require("lodash/fp");

/**
 * Invokes the `trySupplier` in a `try..catch` block and invoked the `catchFunction` with the caught `error`.
 *
 * @param {Function} catchFunction - Function to map the caught `error`.
 * @param {Function} trySupplier - Nullary function that may or may not throw an `Error`.
 * @return {*} The value provided by the `trySupplier` or the return value from the `catchFunction`.
 * @example <caption>Try and catch</caption>
 * const tryWithoutError = _.tryCatch(_.constant(null)); // Throw away error
 * const tryWithPromise = _.tryCatch(error => Promise.reject(error));
 *
 * tryWithoutError(() => fs.readFileSync(foundFile, { encoding: "utf8" }));
 * // => data
 *
 * tryWithoutError(() => fs.readFileSync(missingFile, { encoding: "utf8" }));
 * // => null
 *
 * tryWithPromise(() => Promise.resolve(fs.readFileSync(foundFile, { encoding: "utf8" })));
 * // => resolve(data)
 *
 * tryWithPromise(() => Promise.resolve(fs.readFileSync(missingFile, { encoding: "utf8" })));
 * // => reject(error)
 */
function tryCatch(catchFunction, trySupplier) {
  try {
    return trySupplier();
  } catch (error) {
    return catchFunction(error);
  }
}

module.exports = F.curry(tryCatch);
