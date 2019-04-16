# _.tryCatch(catchFunction, trySupplier)

Invokes the `trySupplier` in a `try..catch` block and invoked the `catchFunction` with the caught `error`.

## Arguments

* `catchFunction (function)`: Function to map the caught `error`.
* `trySupplier (function)`: Nullary function that may or may not throw an `Error`.

## Returns

* `(*)`: The value provided by the `trySupplier` or the return value from the `catchFunction`.

## Examples

### Try and catch

```javascript
const tryWithoutError = _.tryCatch(_.constant(null)); // Throw away error
const tryWithPromise = _.tryCatch(error => Promise.reject(error));

tryWithoutError(() => fs.readFileSync(foundFile, { encoding: "utf8" }));
// => data

tryWithoutError(() => fs.readFileSync(missingFile, { encoding: "utf8" }));
// => null

tryWithPromise(() => Promise.resolve(fs.readFileSync(foundFile, { encoding: "utf8" })));
// => resolve(data)

tryWithPromise(() => Promise.resolve(fs.readFileSync(missingFile, { encoding: "utf8" })));
// => reject(error)
```
